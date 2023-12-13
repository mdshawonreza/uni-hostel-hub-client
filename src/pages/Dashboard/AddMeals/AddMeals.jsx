import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const  image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddMeals = () => {
    const {user}=useContext(AuthContext)
    
    const { register , reset, handleSubmit } =useForm()
    
    const axiosPublic=useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    const onSubmit =  async(data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)
        if (res.data.success) {
            const newMeal={
                mealTitle : data.mealTitle,
                reviews:data.reviews,
                mealCategory:data.mealCategory,
                price:parseFloat(data.price),
                description:data.description,
                rating:data.rating,
                date:data.date,
                likes:data.likes,
                ingredients:data.ingredients,
                image: res.data.data.display_url,
                adminName:user.displayName,
                adminEmail:user.email
    
            }

            const mealRes=await axiosSecure.post('/meals',newMeal)
            if(mealRes.data.insertedId){
                
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `meal is added to the meals.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    }

    

    const onSubmitUpcoming = async(data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const upcomingMeal={
                mealTitle : data.mealTitle,
                reviews:data.reviews,
                mealCategory:data.mealCategory,
                price:parseFloat(data.price),
                description:data.description,
                rating:data.rating,
                date:data.date,
                likes:data.likes,
                ingredients:data.ingredients,
                image: res.data.data.display_url,
                adminName:user.displayName,
                adminEmail:user.email
    
            }

            const mealRes=await axiosSecure.post('/upcomingMeals',upcomingMeal)
            if(mealRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `meal is added to the upcoming meals.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }



    return (
        <div className="bg-[#b0b0ae] max-w-6xl  mx-auto p-8 md:p-12 ">
            <h2 className="text-center text-3xl font-bold mb-8" >Add an Meal</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                {/* form Meal title and reviews row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Meal title</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("mealTitle" , { required: true })}  name="mealTitle" placeholder="Enter Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">reviews</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("reviews")}  name="reviews" placeholder="Enter reviews" defaultValue={0} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                {/* form mealCategory and Price row */}
                <div className="md:flex mb-6 ">
                   
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Meal Category</span>
                        </label>
                        <select defaultValue={"default"} {...register("mealCategory", { required: true })}   name="mealCategory" className="select select-bordered  ">
                            <option value="default" disabled>Pic a Meal Category</option>
                            <option >Breakfast</option>
                            <option  >Lunch</option>
                            <option  >Dinner</option>
                            

                        </select>
                    </div>

                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("price", { required: true })}  name="price" placeholder="Enter price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form description and Job Rating */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Meal Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("description")}  name="description" placeholder="Enter Meal Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="number" {...register("rating")}  name="rating" placeholder="Enter rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form dateTime and Job likes */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Date Time</span>
                        </label>
                        <label className="input-group">

                            <input type="date" {...register("date")}  name="dateTime" placeholder="Enter Date Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">likes</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("likes")}  name="likes" defaultValue="0" placeholder="Enter likes" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                {/* form ingredients row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <textarea {...register("ingredients")}  placeholder="Enter ingredients" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        
                    </div>
                    
                    

                </div>
                {/* form photo URl row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control w-full">
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    

                </div>
                {/* <input type="submit" value="Add a meal" className="btn text-white btn-block bg-orange-600 hover:bg-orange-700" /> */}
                <div className="flex">
                <button type="submit"  className="btn flex-1 text-white text-sm md:text-lg btn-block bg-[#109e95] hover:bg-[#0a9b91] mb-2">Add  meal</button>
                
                </div>
            </form>
            <form onSubmit={handleSubmit(onSubmitUpcoming)}>
            <button  className="btn flex-1 text-sm md:text-lg text-white btn-block bg-[#109e95] hover:bg-[#0a9b91]">upcoming  meal</button>
            </form>
        </div>
    );
};

export default AddMeals;