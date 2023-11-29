import MealCard from "../../../components/MealCard";
import PropTypes from 'prop-types'; 

const MealsTab = ({items}) => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[320px] md:max-w-[700px] lg:max-w-[1080px] mx-auto'>
        {
            items.map(item => <MealCard key={item._id} item={item}></MealCard>)
        }
    </div>
    );
};

export default MealsTab;
MealsTab.propTypes={
    items:PropTypes.array
}