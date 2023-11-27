import MealCard from "../../../components/MealCard";
import PropTypes from 'prop-types'; 

const MealsTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-16 max-w-5xl mx-auto'>
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