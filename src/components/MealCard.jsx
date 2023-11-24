import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';


const MealCard = ({item}) => {
    const {_id,image,mealTitle,rating,price}=item
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{mealTitle}</h2>
                <p> {rating}</p>
                <p>$ {price}</p>
                <div className="card-actions ">
                    
                    <Link to={`/details/${_id}`}>
                                    <button
                                        className="select-none btn-block  rounded-lg bg-gradient-to-tr  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#192a60]/20 transition-all hover:shadow-lg hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        View Details
                                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MealCard;

MealCard.propTypes={
    item:PropTypes.object
}