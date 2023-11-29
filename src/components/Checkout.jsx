import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
const Checkout = () => {
    const item=useLoaderData()
    
    return (
        <div className="max-w-[380px] md:max-w-3xl lg:max-w-5xl mx-auto ">
            <Elements stripe={stripePromise}>
                <CheckoutForm item={item}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;