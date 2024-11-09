
import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Routes;