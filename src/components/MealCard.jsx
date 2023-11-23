import PropTypes from 'prop-types'; 


const MealCard = ({item}) => {
    const {image,mealTitle,rating,price}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{mealTitle}</h2>
                <p> {rating}</p>
                <p>$ {price}</p>
                <div className="card-actions ">
                    <button className="btn btn-block btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default MealCard;

MealCard.propTypes={
    item:PropTypes.object
}