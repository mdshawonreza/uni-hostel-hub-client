
import useUpcomingMeals from "../../../hooks/useUpcomingMeals";


const NextMeals = () => {
    const [meals] = useUpcomingMeals()
    return (
        <div className="p-8">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Upcoming Meals</h2>
                <h2 className="text-3xl">Total Upcoming Meals {meals.length}:</h2>

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


                            <th>Status</th>
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
                                    <button
                                        className="select-none btn-block  rounded-lg bg-gradient-to-tr  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#192a60]/20 transition-all hover:shadow-lg hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        Publish
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

export default NextMeals;