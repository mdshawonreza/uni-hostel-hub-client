import UpcomingMealCard from "../../components/UpcomingMealCard";
import useUpcomingMeals from "../../hooks/useUpcomingMeals";


const UpcomingMeals = () => {
    const [upcomingMeals] = useUpcomingMeals()
    // console.log(upcomingMeals)
    return (
        <div className="bg-base-200 py-8">
            <div className="text-center mt-8">
                <h2 className="text-4xl font-bold mb-3">Upcoming <span className="text-orange-500">Meals</span> </h2>
                <p className="text-gray-600 text-lg mb-8">Book your hostel now and unlock exclusive discounts, ensuring a budget-friendly <br /> stay with exceptional comfort and service.</p>
            </div>
            <div className="my-16 max-w-[350px]  md:max-w-[700px] lg:max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    upcomingMeals.map(item => <UpcomingMealCard key={item._id} item={item}></UpcomingMealCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingMeals;