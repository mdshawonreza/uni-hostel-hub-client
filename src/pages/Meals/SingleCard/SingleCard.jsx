import { MdStarRate } from "react-icons/md";
import { TbRating14Plus } from "react-icons/tb";


const SingleCard = ({ meal }) => {
    console.log(meal)
    const { mealTitle, image, description, price, rating } = meal
    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                    src={image}
                    alt="image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">

                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {mealTitle}
                </h4>
                <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {description}

                </p>
                <div className="flex justify-between items-center">
                    <h6 className="block  font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">
                        Price: $ <span className=" text-pink-500 ">{price}</span>
                    </h6>
                    <div className='flex justify-between items-center gap-3'>
                        <MdStarRate className='text-2xl text-orange-500'></MdStarRate>
                        <p className="block font-sans font-semibold antialiased  leading-relaxed text-inherit">

                            {rating}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SingleCard;