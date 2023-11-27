
import { NavLink, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdPreview } from "react-icons/md";
import { FaHome, FaSearch, FaUsers } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    return (
        <div className='flex mx-w-[380px] md:max-w-3xl lg:max-w-6xl mx-auto '>
            <div className='w-64 min-h-screen bg-orange-500'>
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to="/dashboard/adminProfile" className="text-base text-white font-medium">
                                    <CgProfile></CgProfile>
                                    Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className="text-base text-white font-medium">
                                    <FaUsers></FaUsers>
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addMeals" className="text-base text-white font-medium">
                                    <MdPreview></MdPreview>
                                    Add meal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allMeals" className="text-base text-white font-medium">
                                    <MdPreview></MdPreview>
                                    All meals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allReviews" className="text-base text-white font-medium">
                                    <MdPreview></MdPreview>
                                    All reviews

                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/serveMeals" className="text-base text-white font-medium">
                                    <MdPreview></MdPreview>
                                    Serve meals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/upcomingMeals" className="text-base text-white font-medium">
                                    <MdPreview></MdPreview>
                                    Upcoming meals
                                </NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myProfile" className="text-base text-white font-medium">
                                        <CgProfile></CgProfile>
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/requestedMeals" className="text-base text-white font-medium">
                                        <VscGitPullRequestGoToChanges></VscGitPullRequestGoToChanges>
                                        Requested Meals
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myReviews" className="text-base text-white font-medium">
                                        <MdPreview></MdPreview>
                                        My Reviews
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* shared navLinks */}
                    <div className="divider "></div>

                    <li>
                        <NavLink to="/" className="text-base text-white font-medium">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className="text-base text-white font-medium">
                            <FaSearch></FaSearch>
                            Meals
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;