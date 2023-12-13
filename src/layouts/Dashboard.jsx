
import { NavLink, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdPreview } from "react-icons/md";
import { FaHome, FaSearch, FaUsers } from 'react-icons/fa';
import { IoIosAddCircle } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { MdUpcoming } from "react-icons/md";
import useAdmin from '../hooks/useAdmin';
import logo from '../assets/logo2-removebg-preview.png'


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    return (
        <div className='flex flex-col md:flex-row  mx-auto max-w-[380px] md:max-w-screen-2xl  '>

            <div className=' w-48 md:w-48 lg:w-64 min-h-min md:min-h-screen bg-[#109e95]'>
                <div className='flex justify-center my-3 gap-1 items-center'>
                    <img className='w-8 md:w-10 lg:w-14' src={logo} alt="" />
                    <h2 className='text-md md:text-lg lg:text-xl text-white font-semibold'>UniHostelHub</h2>
                </div>
                <div className='border-b-2'></div>
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to="/dashboard/adminProfile" className="text-sm md:text-base text-white font-medium">
                                    <CgProfile></CgProfile>
                                    Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className="text-sm md:text-base text-white font-medium">
                                    <FaUsers></FaUsers>
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addMeals" className="text-sm md:text-base text-white font-medium">
                                    <IoIosAddCircle></IoIosAddCircle>
                                    Add meal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allMeals" className="text-sm md:text-base text-white font-medium">
                                    <GiMeal></GiMeal>
                                    All meals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allReviews" className="text-sm md:text-base text-white font-medium">
                                    <MdRateReview></MdRateReview>
                                    All reviews

                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/serveMeals" className="text-sm md:text-base text-white font-medium">
                                    <TbReservedLine></TbReservedLine>
                                    Serve meals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/nextMeals" className="text-sm md:text-base text-white font-medium">
                                    <MdUpcoming></MdUpcoming>
                                    Upcoming meals
                                </NavLink>
                            </li>

                        </>
                            :
                            <>
                                {/* <li>
                                    <NavLink to="/dashboard/myProfile" className="text-base text-white font-medium">
                                        <CgProfile></CgProfile>
                                        My Profile
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/requestedMeals" className="text-sm md:text-base text-white font-medium">
                                        <VscGitPullRequestGoToChanges></VscGitPullRequestGoToChanges>
                                        Requested Meals
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myReviews" className="text-sm md:text-base text-white font-medium">
                                        <MdPreview></MdPreview>
                                        My Reviews
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* shared navLinks */}
                    <div className="divider "></div>

                    <li>
                        <NavLink to="/" className="text-sm md:text-base text-white font-medium">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/myProfile" className="text-sm md:text-base text-white font-medium">
                            <CgProfile></CgProfile>
                            My profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/meals" className="text-sm md:text-base text-white font-medium">
                            <FaSearch></FaSearch>
                            Meals
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className=' flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;