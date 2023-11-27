import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdStarRate } from "react-icons/md";


const MealCard = ({ item }) => {
    const { _id, image, mealTitle, rating, price } = item
    return (

        <div key={_id} className=" relative flex flex-col text-gray-700 bg-white shadow-md w-[340px] rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    className="w-full h-full"
                    src={image}
                    alt="img-blur-shadow"

                />
            </div>
            <div className="p-6">
                <div className='flex justify-between'>
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {mealTitle}
                    </h5>
                    <div className='flex justify-between items-center gap-3'>
                        <MdStarRate className='text-2xl text-orange-500'></MdStarRate>
                        <p className="block font-sans font-semibold antialiased  leading-relaxed text-inherit">

                            {rating}
                        </p>
                    </div>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    <span className="text-black font-semibold">price:</span>$ <span className="font-bold "> {price}</span>
                </p>

            </div>
            <div className="p-6 pt-0">
                <Link to={`/details/${_id}`}>
                    <button
                        className="select-none btn-block  rounded-lg bg-gradient-to-tr  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#192a60]/20 transition-all hover:shadow-lg hover:bg-gradient-to-tr from-[#109e95] to-[#12a39f] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MealCard;

MealCard.propTypes = {
    item: PropTypes.object
}