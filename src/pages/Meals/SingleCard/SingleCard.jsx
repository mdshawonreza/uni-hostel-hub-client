

const SingleCard = ({ meal }) => {
    console.log(meal)
    const { mealTitle, image } = meal
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
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                    startups
                </h6>
                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {mealTitle}
                </h4>
                <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Like so many organizations these days, Autodesk is a company in
                    transition. It was until recently a traditional boxed software company
                    
                </p>
                
            </div>
        </div>
    );
};

export default SingleCard;