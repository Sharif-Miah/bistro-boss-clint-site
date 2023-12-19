import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import SignIn from "../Pages/SignIn/SignIn";
import Login from "../Pages/Login/Login";
import Secret from "../Sheard/Secret/Secret";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Loyout/Dashboard";
import MyCart from "../Pages/MyCart/MyCart";
import Allusers from "../Pages/Addminpage/Allusers/Allusers";


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
            path: '/ourmenu',
            element: <OurMenu/>
        },
        {
            path: '/ourshop/:category',
            element: <OurShop/>
        },
        {
            path: '/secret',
            element: <PrivetRoutes><Secret/></PrivetRoutes>
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
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'mycart',
          element: <MyCart/>
        },
        {
          path: 'allusers',
          element: <Allusers/>
        },
      ]
    }
  ]);