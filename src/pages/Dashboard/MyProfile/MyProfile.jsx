import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-base-200 w-full h-full">
            <h2 className="text-center text-3xl pt-16 font-bold">My Profile</h2>
            <div className="border-orange-600 mt-3 border max-w-md mx-auto"></div>
            <div className="flex justify-center  ">
                <div className="relative  mt-6 flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className=" flex justify-center  m-6">
                        <img className="rounded-full w-36" src={user?.photoURL} />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           Name : {user?.displayName}
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                            Email: {user?.email}
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <FaFacebook className="text-3xl text-blue-700"></FaFacebook>
                        <FaInstagram className="text-3xl text-pink-600"></FaInstagram>
                        <FaLinkedin className="text-3xl text-blue-500"></FaLinkedin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;