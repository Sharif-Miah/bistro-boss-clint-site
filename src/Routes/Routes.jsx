import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Deshbord from "../Pages/Deshbord/Deshbord";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import SignIn from "../Pages/SignIn/SignIn";
import Login from "../Pages/Login/Login";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/contactus',
            element: <ContactUs/>
        },
        {
            path: '/deshbord',
            element: <Deshbord/>
        },
        {
            path: '/ourmenu',
            element: <OurMenu/>
        },
        {
            path: '/ourshop/:category',
            element: <OurShop/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signin',
            element: <SignIn/>
        },
      ]
    },
  ]);