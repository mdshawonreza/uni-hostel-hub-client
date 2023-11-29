import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const UpdateReview = () => {

    const updateReview= useLoaderData()
    console.log(updateReview)
    const axiosSecure=useAxiosSecure()

    const handleUpdateReview=async(event)=>{
        event.preventDefault()
        const form=event.target
        const review = form.review.value
        console.log(review)

        const reviewMassages = {
            
            review
        }

        const mealRes = await axiosSecure.patch(`/reviews/${updateReview._id}`, reviewMassages)
        console.log(mealRes.data)
            if (mealRes.data.modifiedCount>0) {
                // show success popup
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `review is Updated to the reviews.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    }
    return (
        <div>
            <div className="max-w-xl mx-auto">
                <h2 className="text-center text-xl font-semibold ">Update Your REVIEW</h2>
                <form onSubmit={handleUpdateReview}  className="flex justify-evenly items-center gap-8" >
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="label-text">Your Review</span>

                        </label>
                        <textarea name="review" defaultValue={updateReview.review}  className="textarea textarea-bordered h-24" placeholder="Review"></textarea>

                    </div>
                    <div className="flex justify-center">
                        <input className="btn btn-outline text-lg" type="submit" value="Submit" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateReview;