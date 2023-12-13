import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm = ({ item }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();



    const totalPrice = item.price
    // console.log(totalPrice)



    // console.log(item)
    useEffect(() => {
        if (totalPrice > 0) {
            axios.post('https://uni-hostel-hub-server.vercel.app/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [totalPrice])




    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    membershipId: item._id,
                    membershipStatus: item.type,
                    // menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axios.post('https://uni-hostel-hub-server.vercel.app/payments', payment);
                console.log('payment saved', res.data);

                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Thank you for purchase ${item.type}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            }
        }

    }
    return (
        <div className="bg-base-200 w-full h-full">
            <h2 className="text-center text-3xl pt-16 font-bold"> Payment For purchase {item.type}</h2>
            <div className="max-w-[300px] mx-auto">
                <ul className="font-semibold my-2">
                    <li>1.{item.benefits01}</li>
                    <li>2.{item.benefits02}</li>
                    <li>3.{item.benefits03}</li>
                </ul>
            </div>
            <h2 className="text-center text-xl py-3 font-bold"> Payment Amount: $ <span className="text-orange-500">{item.price}</span></h2>
            <div className="border-orange-600 mt-3 border max-w-md mx-auto"></div>
            <div className="flex justify-center  ">
                <div className="relative  my-8 flex flex-col text-gray-700 bg-white shadow-md w-[520px] rounded-xl bg-clip-border">

                    <form className="p-10 " onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        <button className="btn  btn-primary  btn-outline my-4" disabled={!stripe} type="submit">
                            Pay
                        </button>
                        <p className="text-red-600">{error}</p>
                        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}

                    </form>
                </div>
            </div>
        </div>

    );
};

export default CheckoutForm;