import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar";
import Footer from "../Sheard/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;