import { useLoaderData } from "react-router-dom";


const DetailsMeal = () => {
    const item=useLoaderData('')
    console.log(item)
    const {image,mealTitle,rating,price}=item
    return (
        <div className=" flex justify-center items-center  my-8" >
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-[70%]">
                <div className=" flex justify-center relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="w-full rounded-t-lg"
                        src={image}
                        alt="ui/ux review check"
                    />


                </div>

                <div className="p-5">
                    <div>
                        <h4 className="block border-b-2 border-slate-600 pb-2 text-pink-500  font-sans text-3xl font-bold leading-snug tracking-normal antialiased">
                            {mealTitle}
                        </h4>
                    </div>
                    <p className="mt-3 block font-sans text-xl font-semibold  leading-relaxed text-gray-700 antialiased">
                        
                    </p>

                    <p className="mt-3" > <span className='text-xl  font-bold'>Salary Range:</span> <span className='text-lg font-bold text-zinc-500'> $ <span className="text-black">{price}</span> </span> </p>

                    <p className="mt-3 text-xl  font-bold">Number of Applicants: </p>

                    <button  className="btn btn-block text-base btn-outline mt-3 mb-2" >Apply </button>



                    {/* <Dialog
                        size="xs"
                        open={open}
                        handler={handleOpen}
                        className="bg-transparent shadow-none"
                    >
                        <Card className="mx-auto w-full max-w-[24rem] p-8 ">


                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <Typography className="-mb-2" variant="h6">
                                    Your Name
                                </Typography>
                                <Input name="name" label="Name" size="lg" defaultValue={user.displayName} />
                                <Typography className="-mb-2" variant="h6">
                                    Your Email
                                </Typography>
                                <Input name="email" label="Email" size="lg" defaultValue={user.email} />
                                <Typography className="-mb-2" variant="h6">
                                    Resume link
                                </Typography>
                                <Input name="resumeLink" label="resume link" size="lg" />



                                <CardFooter className="pt-0">
                                    <button onClick={handleOpen} className="btn btn-block btn-outline">Submit</button>
                                </CardFooter>
                            </form>




                        </Card>
                    </Dialog> */}
                   
                </div>

            </div>
        </div>
    );
};

export default DetailsMeal;