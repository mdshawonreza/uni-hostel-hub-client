import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Meals from "../pages/Meals/Meals/Meals";
import PrivateRoute from "./PrivateRoute";
import DetailsMeal from "../components/DetailsMeal";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          loader:({params})=>fetch(`http://localhost:5000/meals/${params.id}`)
        }
      ]
    },
  ]);

export default Router;