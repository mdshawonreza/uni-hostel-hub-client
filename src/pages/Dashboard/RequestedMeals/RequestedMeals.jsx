import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";

const RequestedMeals = () => {
    const { user } = useContext(AuthContext)
    const [requestedMeals, setRequestedMeals] = useState([])

    const url = `https://uni-hostel-hub-server.vercel.app/requests?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRequestedMeals(data))
    }, [url])

    return (
        <div className="p-8">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">My Requested Meals</h2>
                {/* <h2 className="text-3xl">Total requested Meals : {requestedMeals.length}</h2> */}

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
                            <th>Status</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestedMeals.map((meal, index) => <tr key={meal._id}>
                                <th>{index + 1}</th>
                                <td>{meal.mealTitle}</td>
                                <td>1</td>
                                <td>1</td>
                                
                                <td>
                                    <h2 className="p-1 text-lg text-white bg-orange-500 rounded-md text-center"> Pending</h2>
                                </td>
                                
                                <td>
                                    <button
                                        // onClick={() => handleDeleteRequest(meal)}
                                        className="btn btn-ghost btn-md">
                                        <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                                    </button>
                                </td>
                                

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RequestedMeals;