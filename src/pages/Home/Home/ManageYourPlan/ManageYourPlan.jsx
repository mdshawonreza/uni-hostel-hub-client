import find1 from "../../../../assets/find1.png"
import find2 from "../../../../assets/find2.png"
import find3 from "../../../../assets/find3.png"
import find4 from "../../../../assets/find4.png"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const ManageYourPlan = () => {
    return (
        <div className="bg-base-200">
            <h2 className='text-center text-3xl font-bold pt-8'>Feel comfort to share your plan  <span className='text-[#1b9991]'>& book hostel  </span></h2>
            <p className='text-center font-medium text-gray-500 mt-3'>Embrace ease, reveal your itinerary, and secure a cozy stay. Share your travel plan and book a hostel, creating comfort <br /> in every shared adventure and journey..</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 md:pb-14">
                <div className="card   ">
                    <figure className="px-10 pt-10">
                        <img src={find1} alt="Shoes" className='w-40  bg-gray-500 rounded-full p-8  hover:bg-[#109e95]' />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">SHARE YOUR PLANS</h2>
                        <p className=' text-gray-500'>Share your vision, and together, we all shape a future filled with success and happiness</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline  hover:bg-[#109e95] ">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card  ">
                    <figure className="px-10 pt-10">
                        <img src={find2} alt="Shoes" className='w-40 bg-gray-500 rounded-full p-8   hover:bg-[#109e95]' />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">HOSTEL LOCATIONS</h2>
                        <p className=' text-gray-500'>Discover diverse destinations. Choose from our range of global hostel locations.</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline  hover:bg-[#109e95]">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card  ">
                    <figure className="px-10 pt-10">
                        <img className='w-40 bg-gray-500 rounded-full p-8  hover:bg-[#109e95]' src={find3} />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">GET DISCOUNT
                        </h2>
                        <p className=' text-gray-500'>Unlock savings! Book your hostel now and enjoy exclusive discounts today.</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline   hover:bg-[#109e95]">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div className="card   ">
                    <figure className="px-10 pt-10">
                        <img className='w-40 bg-gray-500 rounded-full p-8   hover:bg-[#109e95]' src={find4} />
                    </figure>
                    <div className='flex justify-center mt-6'>
                        <div className='bg-orange-500 w-32 h-[1px]'>

                        </div>
                    </div>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">CALL NOW!</h2>
                        <p className=' text-gray-500'> Prompt Assistance for Emergencies  Solutions. Your Reliable Helpline Awaits Your Call</p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-outline  hover:bg-[#109e95]">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <MessengerCustomerChat
                pageId="108480261351190"
                appId="1498133390920760"
                
            />,

        </div>
    );
};

export default ManageYourPlan;