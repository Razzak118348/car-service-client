
import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";

const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:async({params})=>fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },

            {
                path:'checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=> fetch(`http://localhost:3000/services/${params.id}`)
            }
        ]
    }
])

export default Routes;