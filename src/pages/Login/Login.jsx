import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import SocialLogin from "../../components/socialLogin";


const Login = () => {
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const { signIn } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        const email = data.email
        const password = data.password
        console.log(email, password)

        setLoginError('')
        signIn(email, password)
            .then(result => {
                console.log(result)
                swal({
                    title: "Good job!",
                    text: "User logged in successfully",
                    icon: "success",
                    button: "Aww yiss!",
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setLoginError(error.message)

            })
    }
   
    return (
        <div className="bg-base-200">
            <div className="hero min-h-[780px] md:min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login <span className="text-orange-500">now</span>!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[350px] md:w-[500px] max-w-sm shadow-2xl bg-base-100">
                        {
                            loginError && <p className="text-red-600 text-center text-sm mt-4 -mb-6 ">{loginError}</p>
                        }
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary  bg-orange-600 hover:bg-orange-700 border-orange-700  hover:border-orange-700  text-white px-2 py-2 font-semibold text-xl w-full rounded-lg">Login</button>
                            </div>
                        </form>
                        <p className="text-center font-medium -mt-4 mb-2">New here ? please
                            <Link to="/register">
                                <button className="btn btn-link">Register</button>
                            </Link>
                        </p>
                        <div className="flex justify-center">
                           <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;