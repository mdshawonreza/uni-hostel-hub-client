import { FaTrashAlt } from "react-icons/fa";
import useReviews from "../../../hooks/useReviews";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllReviews = () => {

    const [reviews ,refetch] = useReviews()
    const axiosSecure=useAxiosSecure()
    const handleDeleteReview = (review) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/reviews/${review._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${review.mealTitle} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div className="p-8">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Reviews</h2>
                <h2 className="text-3xl">Total Reviews {reviews.length}:</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Meal Title</th>
                            <th>Number of Likes</th>
                            <th>Number of Reviews</th>
                            <th>Delete</th>
                            <th>View Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) => <tr key={review._id}>
                                <th>{index + 1}</th>
                                <td>{review.mealTitle}</td>
                                <td>1</td>
                                <td>{reviews.length}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteReview(review)}
                                        className="btn btn-ghost btn-md">
                                        <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/details/${review.mealId}`}>
                                        <button
                                            className="select-none btn-block  rounded-lg bg-gradient-to-tr  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#192a60]/20 transition-all hover:shadow-lg hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            Details
                                        </button>
                                    </Link>
                                </td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllReviews;