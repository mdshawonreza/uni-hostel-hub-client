import Banner from "../Banner/Banner";
import MealsCategories from "../MealsCategories/MealsCategories";
import ManageYourPlan from "./ManageYourPlan/ManageYourPlan";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="  bg-base-200">
            <MealsCategories></MealsCategories>
            </div>
             <ManageYourPlan></ManageYourPlan>
            
        </div>
    );
};

export default Home;