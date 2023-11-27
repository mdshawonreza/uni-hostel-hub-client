import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div className='h-screen flex  justify-center items-center'>
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-3">Oops <span className="text-5xl font-extrabold text-[#121f4a]">!!!</span></h2>
                <p className="text-xl font-semibold mt-2  ">{error.statusText || error.message}</p>
                {
                    error.status === 404 && <div>
                        {/* <h3>Page not found</h3> */}
                        <p className="text-lg font-semibold text-center mt-2 mb-3">Go back where you from</p>
                        <Link to='/'> <button className="btn  btn-sm btn-outline btn-error ">Home</button></Link>
                    </div>
                    
                }
            </div>

        </div>
    );
};

export default ErrorPage;