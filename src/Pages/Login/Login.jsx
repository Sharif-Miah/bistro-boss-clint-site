import React, { useEffect, useState } from "react";
import registerImg from "../../assets/others/authentication1.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    // console.log(name, email, password, captcha);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "User Login Successfull.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, {replace: true})
    });
  };

  const handleValidCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>

      <div className="my-24">
        <div className="card lg:card-side bg-base-100">
          <figure className="w-1/2 mx-auto">
            <img src={registerImg} alt="Album" className="w-full" />
          </figure>
          <div className="card-body w-1/2 mx-auto">
            <h2 className="text-3xl font-bold ml-9 lg:ml-16 mb-7">Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <div className="">
                  <label className="font-semibold ml-3">Name</label> <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered input-md w-full max-w-xs mt-3"
                    required
                  />
                </div>
                <div className="">
                  <label className="font-semibold ml-3">Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered input-md w-full max-w-xs mt-3"
                    required
                  />
                </div>
                <div className="">
                  <label className="font-semibold ml-3">Comfirm Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Type password"
                    className="input input-bordered input-md w-full max-w-xs mt-3"
                    required
                  />
                </div>
                <div className="">
                  <label className="font-semibold ml-3">
                    <LoadCanvasTemplate />
                  </label>
                  <br />
                  <input
                    onBlur={handleValidCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type The Text Captcha"
                    className="input input-bordered input-md w-full max-w-xs"
                    required
                  />
                </div>
                {/* TODO:   MAKE DISABLE BUTTON EANABLE */}
                <button
                  disabled={false}
                  className="btn bg-orange-300 hover:bg-orange-400 text-white input-bordered  w-full max-w-xs mt-3"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="ml-6 lg:ml-24">
              <p className=" text-sm mt-3">OR login with you</p>
            </div>
            <div className=" lg:flex  ml-16 lg:ml-24  mt-5">
              <FcGoogle className="text-2xl text-sky-900 cursor-pointer" />
              <FaFacebookF className="text-2xl my-3 lg:my-0 lg:mx-9 text-sky-900 cursor-pointer" />
              <TfiLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
            </div>
            <div>
              <p className="ml-6 lg:ml-12 mt-0 lg:mt-5 cursor-pointer">
                Already have an account?
                <Link
                  to="/signin"
                  className="text-red-500 ml-6 lg:ml-0 font-bold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
