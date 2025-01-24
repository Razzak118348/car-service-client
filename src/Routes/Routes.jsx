
import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRout from "./PrivateRout";
import About from "../Pages/Home/About/About";
import Service from "../Pages/Home/Service/Service";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

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
                loader:async({params})=>fetch(`https://car-service-server-theta.vercel.app/services/${params.id}`)
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
                element:<PrivateRout children={<CheckOut></CheckOut>}></PrivateRout>,
                loader:({params})=> fetch(`https://car-service-server-theta.vercel.app/services/${params.id}`)
            },
            {
                path:'/bookings',
                element:<PrivateRout children={<Bookings></Bookings>}></PrivateRout>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/Services',
                element:<Service></Service>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
]
)

export default Routes;