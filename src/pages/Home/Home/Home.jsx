import Banner from "../Banner/Banner";
import MealsCategories from "../MealsCategories/MealsCategories";
import ManageYourPlan from "./ManageYourPlan/ManageYourPlan";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <MealsCategories></MealsCategories>
             <ManageYourPlan></ManageYourPlan>
            
        </div>
    );
};

export default Home;