import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MyReviews = () => {
    const axiosSecure=useAxiosSecure()
    const { user } = useContext(AuthContext)
    const {data : myReviews = [], refetch } =useQuery({
        queryKey : ['myReviews'] ,
        queryFn : async ()=>{
            const res= await axiosSecure.get(`/mealReviews?email=${user.email}`)
            return res.data
        }
    })
   
    console.log(myReviews)


    const handleDeleteReview = (myReview) => {
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
                const res = await axiosSecure.delete(`/reviews/${myReview._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${myReview.mealTitle}s myReview has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div className="p-0 md:p-8">
            <div className="flex justify-evenly my-4">
                <h2 className="text-md md:text-3xl font-semibold">My Reviews</h2>
                <h2 className="text-md md:text-3xl font-semibold">Total Reviews {myReviews.length}:</h2>

            </div>
            <div className="overflow-x-auto max-w-[380px] md:max-w-[650px] lg:max-w-[980px]  mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Meal Title</th>
                            <th>Number of Likes</th>
                            <th>Number of Reviews</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>View Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map((myReview, index) => <tr key={myReview._id}>
                                <th>{index + 1}</th>
                                <td>{myReview.mealTitle}</td>
                                <td>1</td>
                                <td>{myReviews.length}</td>
                                <td>
                                    <Link to={`/dashboard/updateReview/${myReview._id}`}>
                                        <button
                                            className="btn btn-ghost btn-md bg-orange-500">
                                            <FaEdit className="text-white text-xl
                                        "></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteReview(myReview)}
                                        className="btn btn-ghost btn-md">
                                        <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                                    </button>
                                </td>

                                <td>
                                    <Link to={`/details/${myReview.mealId}`}>
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

export default MyReviews;