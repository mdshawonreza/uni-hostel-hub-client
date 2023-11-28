import { useState } from "react";
import useMeals from "../../../hooks/useMeals";
import SingleCard from "../SingleCard/SingleCard";


const Meals = () => {
    const [meals] = useMeals()
    const [allMeals, setAllMeals] = useState(meals)
    const [search, setSearch] = useState("")

    return (
        <div>
            <div className="w-1/2 mx-auto mb-10">
                <div className="text-center mt-8">
                    <h2 className="text-4xl font-bold mb-3">Find Your <span className="text-orange-500">Meals</span> </h2>
                    <p className="text-gray-600 text-lg mb-6">Book your hostel now and unlock exclusive discounts, ensuring a budget-friendly stay with exceptional comfort and service.</p>
                </div>
                <div className="form-control ">
                    <div className="join">
                        <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search…" className="input input-bordered text-orange-600 join-item font-medium w-full" />
                        <button className="btn btn-square bg-yellow-400 hover:bg-yellow-500 join-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[380px] md:max-w-3xl lg:max-w-6xl mx-auto my-16">


                {
                    allMeals.filter((meal) => {
                        return search.toLowerCase() === ""
                            ? meal
                            : meal.mealTitle.toLowerCase().includes(search)
                    }).map(meal => <SingleCard key={meal._id} meal={meal}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Meals;