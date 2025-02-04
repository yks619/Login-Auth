import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                },

                {
                    path:"/about",
                    element:<About/>,
                },

                {
                    path:"contact",
                    element:<Contact/>,
                },

                {
                    path:"signup",
                    element:<SignUp/>,
                },

                {
                    path:"login",
                    element:<LogIn/>,
                },
            ]
        }
    ]
)