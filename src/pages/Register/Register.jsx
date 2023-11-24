import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = data => {

        const displayName = data.name
        const email = data.email
        const photo = data.photoURL
        const password = data.password

        setRegisterError('')
        setSuccess('')


        createUser(email, password, photo, displayName)
        
            .then(result => {
                console.log(result)
                swal({
                    title: "Good job!",
                    text: "User created successfully",
                    icon: "success",
                    button: "Aww yiss!",
                });
            })
            .catch(error => {
                console.error(error.message)
                setRegisterError(error.message)
            })
    }

    return (
        <div className="bg-base-200">
            <div className="hero min-h-[780px] md:min-h-[60vh] ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register <span className="text-orange-500">now</span>!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[350px] md:w-[500px]  shadow-2xl bg-base-100">
                        {
                            registerError && <p className="text-red-600 text-center text-sm mt-4 -mb-6 ">{registerError}</p>
                        }

                        {
                            success && <p className="text-green-600 mt-4 -mb-6 text-center text-base font-medium  ">{success}</p>
                        }

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Email</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" {...register("photo")} className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="Password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="block bg-orange-600  hover:bg-orange-700 hover:border-orange-700 text-white px-2 py-2 font-semibold text-xl w-full rounded-lg" type="submit" value="Register" />
                            </div>
                        </form>

                        <p className="text-center font-medium -mt-8 mb-4">Already Register ? please
                            <Link to="/login">
                                <button className="btn btn-link ">Login</button>
                            </Link>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;