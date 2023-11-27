import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Meals from "../pages/Meals/Meals/Meals";
import PrivateRoute from "./PrivateRoute";
import DetailsMeal from "../components/DetailsMeal";
import Dashboard from "../layouts/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import RequestedMeals from "../pages/Dashboard/RequestedMeals/RequestedMeals";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddMeals from "../pages/Dashboard/AddMeals/AddMeals";
import AdminRoute from "./AdminRoute";
import AllMeals from "../pages/Dashboard/AllMeals/AllMeals";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
          path:'/meals',
          element: <Meals></Meals>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute> <DetailsMeal></DetailsMeal> </PrivateRoute>,
          loader:({params})=>fetch (`http://localhost:5000/meals/${params.id}`)
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'myProfile',
          element:<MyProfile></MyProfile>
        },
        {
          path:'requestedMeals',
          element:<RequestedMeals></RequestedMeals>
        },
        {
          path:'myReviews',
          element:<MyReviews></MyReviews>
        },

        // admin routes
        {
          path:'users',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'addMeals',
          element:<AdminRoute><AddMeals></AddMeals></AdminRoute>
        },
        {
          path:'allMeals',
          element:<AdminRoute><AllMeals></AllMeals></AdminRoute>
        }
      ]
    }
  ]);

export default Router;