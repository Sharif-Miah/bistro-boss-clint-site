import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Sheard/Navbar";
import Footer from "../Sheard/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFoter = location.pathname.includes("login")
    const noHeaderFotersignIn = location.pathname.includes("signin")
    return (
        <div>
            { noHeaderFoter  || <Navbar/>}
            <Outlet></Outlet>
            {noHeaderFoter || <Footer/>}
        </div>
    );
};

export default Main;