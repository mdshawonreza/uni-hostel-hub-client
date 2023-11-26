
import { NavLink, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdPreview } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className='flex mx-w-[380px] md:max-w-3xl lg:max-w-6xl mx-auto '>
            <div className='w-64 min-h-screen bg-orange-500'>
                <ul className='menu p-4'>
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

                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;