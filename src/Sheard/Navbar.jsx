import { Link } from "react-router-dom";

const Navbar = () => {
  const MenuItem = (
    <>
      <Link className="ml-5 font-semibold">HOME</Link>
      <Link to='/Contactus' className="ml-5 font-semibold">CONTACT US</Link>
      <Link to='/Deshbord' className="ml-5 font-semibold">DASHBOARD</Link>
      <Link to='/Ourmenu' className="ml-5 font-semibold">Our Menu</Link>
      <Link to='/Ourshop/salad' className="ml-5 font-semibold">Our Shop</Link>
    </>
  );

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItem}
            </ul>
          </div>
          <Link to='/'>
          <a  className=" normal-case text-2xl font-bold">BISTRO BOSS</a>
          <p className="letter-spacing">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{MenuItem}</ul>
        </div>
        <div className="navbar-end">
            <div className="mr-5">
                <Link className="font-semibold">SIGN IN</Link>
            </div>
            <img className="w-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    
  );
};

export default Navbar;
