import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login&SingUp/Login/Login";
import Singup from "../../Pages/Login&SingUp/SingUp/Singup";
import Main from "../Main/Main";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/singup",
                element:<Singup></Singup>
            }

        ]
    }
])