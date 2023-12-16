import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthPorvider";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../Hooks/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const MenuItem = (
    <>
      <li>
        <Link className="ml-5 font-semibold">HOME</Link>
      </li>
      <li>
        <Link to="/Contactus" className="ml-5 font-semibold">
          CONTACT US
        </Link>
      </li>
      <li>
        <Link to="/Deshbord" className="ml-5 font-semibold">
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link to="/Ourmenu" className="ml-5 font-semibold">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/Ourshop/salad" className="ml-5 font-semibold">
          Our Shop
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/secret" className="ml-5 font-semibold">
              secret
            </Link>
          </li>
        </>
      ) : (
        <> </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar fixed z-10 max-w-7xl bg-opacity-30 text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            {MenuItem}
          </ul>
        </div>
        <Link to="/">
          <a className=" normal-case text-2xl font-bold">BISTRO BOSS</a>
          <p className="letter-spacing">Restaurant</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal hover:text-white px-1">
          {MenuItem}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5">
          {user ? (
            <>
              <li className="list-none">
                <button
                  onClick={handleLogOut}
                  className="font-semibold mr-4 text-xm"
                >
                  LogOut
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="list-none">
                <Link to="/login" className="font-semibold mr-4 text-xm">
                  LOGIN
                </Link>
              </li>
            </>
          )}
        </div>
        <button className="btn z-10 max-w-7xl border-0 bg-opacity-30 text-white bg-black hover:bg-opacity-30 hover:text-white hover:bg-black">
        <FaCartShopping />
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
