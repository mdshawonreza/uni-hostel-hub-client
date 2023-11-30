import { Link } from "react-router-dom";
import useRequestMeals from "../../../hooks/useRequestMeals";


const ServeMeals = () => {
    const [requestMeals] = useRequestMeals()

    return (
        <div className="p-0 md:p-8">
            <div className="flex justify-evenly my-4">
                {/* <h2 className="text-md md:text-3xl font-semibold">Requested Meals</h2> */}
                <h2 className="text-md md:text-3xl font-semibold">Total  Requested Meals {requestMeals.length}:</h2>

            </div>
            <div className="overflow-x-auto max-w-[380px] md:max-w-[650px] lg:max-w-[980px]  mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Meal Title</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>status</th>
                            <th>Serve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestMeals.map((meal, index) => <tr key={meal._id}>
                                <th>{index + 1}</th>
                                <td>{meal.mealTitle}</td>
                                <td>{meal.name}</td>
                                <td>{meal.email}</td>

                                <td>
                                    <h2 className="text-center p-2 bg-orange-400 rounded-md text-sm md:text-md  text-white font-semibold">Pending</h2>
                                </td>


                                <td>
                                    <Link to={`/details/${meal._id}`}>
                                        <button
                                            className="select-none btn-block  rounded-lg bg-gradient-to-tr  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#192a60]/20 transition-all hover:shadow-lg hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            Serve
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

export default ServeMeals;