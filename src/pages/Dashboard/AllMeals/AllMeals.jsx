import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMeals from "../../../hooks/useMeals";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllMeals = () => {
    const [meals, refetch] = useMeals()
    const axiosSecure = useAxiosSecure()

    const handleDeleteMeal = (meal) => {
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
                const res = await axiosSecure.delete(`/meals/${meal._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${meal.mealTitle} has been deleted`,
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
                <h2 className="text-3xl">All Meals</h2>
                <h2 className="text-3xl">Total Meals {meals.length}:</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Meal Title</th>
                            <th>Likes Count</th>
                            <th>Reviews count</th>
                            <th>Distributor Name</th>
                            <th>Distributor Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>View Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meals.map((meal, index) => <tr key={meal._id}>
                                <th>{index + 1}</th>
                                <td>{meal.mealTitle}</td>
                                <td>{meal.likes}</td>
                                <td>{meal.reviews}</td>
                                <td>{meal.adminName}</td>
                                <td>{meal.adminEmail}</td>
                                <td>
                                    <Link to={`/dashboard/updateMeal/${meal._id}`}>
                                        <button
                                            className="btn btn-ghost btn-md bg-orange-500">
                                            <FaEdit className="text-white text-xl
                                        "></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteMeal(meal)}
                                        className="btn btn-ghost btn-md">
                                        <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/details/${meal._id}`}>
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

export default AllMeals;