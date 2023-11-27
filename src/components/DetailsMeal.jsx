import { Link, useLoaderData } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";


const DetailsMeal = () => {
    const item = useLoaderData('')
    console.log(item)
    const { _id, image, rating, adminName, description, ingredients, dateTime, price } = item

    const handleMealRequest= id =>{
       
    }
    return (
        <div className="bg-base-200  py-8">
            <div className=" flex justify-center items-center " >
                <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-[50%]">
                    <div className=" flex justify-center relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className="w-full h-[60vh] rounded-t-lg"
                            src={image}
                            alt="ui/ux review check"
                        />


                    </div>

                    <div className="p-5">
                        <div>
                            <h4 className="block text-[#109e95]  font-sans text-3xl font-bold leading-snug tracking-normal antialiased">
                                {adminName}
                            </h4>
                        </div>
                        <p className="mt-3 block font-sans  text-lg leading-relaxed text-gray-700 antialiased">
                            {description}
                        </p>
                        <p className="mt-3 ">
                            <span className=" text-lg  font-sans antialiased font-semibold  leading-relaxed text-gray-700">Ingredients: </span>  <span className="text-lg">{ingredients}</span>
                        </p>
                        <div className="flex justify-between">
                            <p className="mt-3 block font-sans text-xl font-semibold  leading-relaxed text-gray-700 antialiased">
                                Post Time: {dateTime}
                            </p>
                            <button>  <BiSolidLike className="text-2xl"></BiSolidLike> </button>
                        </div>

                        <p className="mt-3" > <span className='text-xl  font-bold'>Salary Range:</span> <span className='text-lg font-bold text-zinc-500'> $ <span className="text-black">{price}</span> </span> </p>


                        <div className="flex justify-between">
                            <div className="text-lg font-bold flex items-center gap-3 my-2">
                               
                                <button onClick={()=>handleMealRequest(_id)} className="btn btn-sm btn-outline">  Meal request <IoSend className="text-lg"></IoSend></button>
                            </div>
                            <div className='flex justify-between items-center gap-3'>
                                <MdStarRate className='text-2xl text-orange-500'></MdStarRate>
                                <p className="block font-sans font-semibold antialiased  leading-relaxed text-inherit">

                                    {rating}
                                </p>
                            </div>

                        </div>

                        <Link to="/meals">
                            <button className="btn btn-block text-base btn-outline mt-3 mb-2" >See All </button>
                        </Link>





                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsMeal;