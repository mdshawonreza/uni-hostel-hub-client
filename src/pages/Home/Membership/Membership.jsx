
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Membership = () => {

    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     fetch('/public/membership.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    const axiosSecure = useAxiosSecure()
    const { data: memberships = [] } = useQuery({
        queryKey: ['memberships'],
        queryFn: async () => {
            const res = await axiosSecure.get('/memberships')
            return res.data
        }
    })
    return (
        <div className="max-w-[380px] md:max-w-3xl lg:max-w-5xl mx-auto py-10">

            <div className="text-center mb-8">
                <h2 className='text-center text-3xl font-bold pt-8'>Purchase Your<span className='text-[#1b9991]'> Membership  </span></h2>
                <p className='text-center font-medium text-gray-500 mt-3'>Unlock exclusive benefits and privileges when you purchase your membership today <br /> Elevate your experience now!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    memberships.map(item => <div key={item.type}>
                        <Link to={`/memberships/${item._id}`}>
                            <div key={item.type} className="relative flex w-full  flex-col rounded-xl  bg-clip-border p-8 text-white shadow-md " style={{ background: item.colorCode }}>
                                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                                    <p className="block font-sans text-lg  antialiased font-semibold leading-normal text-white uppercase">
                                        {item.type}
                                    </p>
                                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                        <span className="mt-2 text-4xl">$</span>{item.price}
                                        <span className="self-end text-4xl">/mo</span>
                                    </h1>
                                </div>
                                <div className="p-0">
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-4">
                                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="w-3 h-3"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                                {item.benefits01}
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="w-3 h-3"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                                {item.benefits02}
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="w-3 h-3"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                                {item.benefits03}
                                            </p>
                                        </li>


                                    </ul>
                                </div>

                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Membership;