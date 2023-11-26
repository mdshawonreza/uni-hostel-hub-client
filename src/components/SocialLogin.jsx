import  { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import swal from 'sweetalert';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {
    const {  signInWithGoogle } = useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const navigate = useNavigate()
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const userInfo={
                    name:result.user?.displayName,
                    email:result.user?.email
                }
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    console.log(res.data)
                })
                swal({
                    title: "Good job!",
                    text: "User logged in successfully",
                    icon: "success",
                    button: "Aww yiss!",
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <button onClick={handleSignInWithGoogle} className=" pl-6 pr-3 py-1 text-lg font-semibold border-2 border-white hover:border-orange-400  hover:border-2 rounded-md hover:text-orange-600 w-36 mb-3">
                <div className="flex items-center gap-2">
                    <FaGoogle></FaGoogle>
                    <p>Google</p>
                </div>
            </button>

        </div>
    );
};

export default SocialLogin;