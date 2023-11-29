import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const DetailsMeal = () => {
    const item = useLoaderData('')
    console.log(item)
    const { _id, mealTitle, image, rating, adminName, description, ingredients, dateTime, price } = item


    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();


    const handleMealRequest = () => {
        if (user && user.email) {
            //send cart item to the database
            const mealRequestItem = {
                mealId: _id,
                email: user.email,
                name:user.displayName,
                mealTitle,
                image,
                price
            }
            axios.post('http://localhost:5000/mealRequests', mealRequestItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: ` added to your Request`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        // refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    const handleReview = event => {
        event.preventDefault()
        const form=event.target
        const review = form.review.value
        console.log(review)

        const reviewMassages = {
            email: user.email,
            mealId: _id,
            mealTitle,
            review


        }
        axios.post('http://localhost:5000/reviews', reviewMassages)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` added to your reviews`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                   
                }

            })


    }


    return (
        <div className="bg-base-200  py-8">
            <div className=" flex justify-center items-center " >
                <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-[50%]">
                    <div className=" flex justify-center relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className="w-full h-[60vh] rounded-t-lg"
                            src={image}
                            alt="ui/ux review check"
                        />


                    </div>

                    <div className="p-5">
                        <div>
                            <h4 className="block text-[#109e95]  font-sans text-3xl font-bold leading-snug tracking-normal antialiased">
                                {adminName}
                            </h4>
                        </div>
                        <p className="mt-3 block font-sans  text-lg leading-relaxed text-gray-700 antialiased">
                            {description}
                        </p>
                        <p className="mt-3 ">
                            <span className=" text-lg  font-sans antialiased font-semibold  leading-relaxed text-gray-700">Ingredients: </span>  <span className="text-lg">{ingredients}</span>
                        </p>
                        <div className="flex justify-between">
                            <p className="mt-3 block font-sans text-xl font-semibold  leading-relaxed text-gray-700 antialiased">
                                Post Time: {dateTime}
                            </p>
                            <button>  <BiSolidLike className="text-2xl"></BiSolidLike> </button>
                        </div>

                        <p className="mt-3" > <span className='text-xl  font-bold'>Salary Range:</span> <span className='text-lg font-bold text-zinc-500'> $ <span className="text-black">{price}</span> </span> </p>


                        <div className="flex justify-between">
                            <div className="text-lg font-bold flex items-center gap-3 my-2">

                                <button onClick={handleMealRequest} className="btn btn-sm btn-outline">  Meal request <IoSend className="text-lg"></IoSend></button>
                            </div>
                            <div className='flex justify-between items-center gap-3'>
                                <MdStarRate className='text-2xl text-orange-500'></MdStarRate>
                                <p className="block font-sans font-semibold antialiased  leading-relaxed text-inherit">

                                    {rating}
                                </p>
                            </div>

                        </div>

                        <Link to="/meals">
                            <button className="btn btn-block text-base btn-outline mt-3 mb-2" >See All </button>
                        </Link>

                        <div className="divider"></div>

                        <div>
                            <h2 className="text-center text-xl font-semibold ">WRITE A CUSTOMER REVIEW</h2>
                            <form onSubmit={handleReview} className="flex justify-evenly items-center gap-8" >
                                <div className="form-control w-4/5">
                                    <label className="label">
                                        <span className="label-text">Your Review</span>

                                    </label>
                                    <textarea name="review" className="textarea textarea-bordered h-24" placeholder="Review"></textarea>

                                </div>
                                <div className="flex justify-center">
                                    <input className="btn btn-outline text-lg" type="submit" value="Submit" />
                                </div>
                            </form>

                        </div>


                    </div>

                </div>
            </div>


        </div>
    );
};

export default DetailsMeal;