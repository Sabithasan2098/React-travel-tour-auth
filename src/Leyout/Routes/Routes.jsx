import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
 
import CardDetails from "../../Pages/CardDetails/CardDetails";
import News from "../../Pages/News/News";
import Login from "../../Pages/login/Login";
import Register from "../../Register/Register";
import PrivateNews from "../../Pages/News/PrivateNews";
 

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[ 
            {
                path:"/",
                element:<News></News>
            },
            {
                path:"/cardDetails",
                element:<CardDetails></CardDetails>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/private",
                element:<PrivateNews></PrivateNews>
            }
        ]
    },
     
])
export default routes;