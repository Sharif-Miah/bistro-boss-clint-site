import { Link, NavLink, Outlet } from "react-router-dom";
import './dashboard.css'
import { GoHomeFill } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { MdEditCalendar } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { GiShoppingBag } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Drayer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] ">
          {/* Sidebar content here */}

          <div className="mb-16">
            <Link to="/">
              <a className=" normal-case text-2xl font-bold text-black">BISTRO BOSS</a>
              <p className="letter-space uppercase mt-2 text-black">Restaurant</p>
            </Link>
          </div>

          <li className="my-1">
            <NavLink to='/userhome'><GoHomeFill /> USAR HOME</NavLink>
          </li>
          <li className="my-1">
            <NavLink to='/reservation'><FaCalendarDays /> RESERVATION</NavLink>
          </li>
          <li className="my-1">
            <NavLink to='/paymenthistory'><GiWallet /> PAYMENT HISTORY</NavLink>
          </li>
          <li className="my-1">
            <NavLink to='/dashboard/mycart'><BsCartFill /> MY CART</NavLink>
          </li>
          <li className="my-1">
            <NavLink to='/addreview'><VscPreview /> ADD REVIEW</NavLink>
          </li >
          <li className="my-1">
            <NavLink to='/mybooking'><MdEditCalendar /> MY BOOKING</NavLink>
          </li>

          <div className="divider"></div>

          <li className="my-1">
            <NavLink to='/'><FaHome /> HOME</NavLink>
          </li>
          <li className="my-1">
            <NavLink to='/menu'><TiThMenu /> MEMU</NavLink>
          </li>
          <li className="my-1">
            <NavLink to='/shop'><GiShoppingBag /> SHOP</NavLink>
          </li >
          <li className="my-1">
            <NavLink to='/contact'><MdEmail /> CONTACT</NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
