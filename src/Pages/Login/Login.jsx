import React from 'react';
import registerImg from '../../assets/others/authentication1.png'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="my-24">
        <div className="card lg:card-side bg-base-100">
          <figure className="w-1/2 mx-auto">
            <img src={registerImg} alt="Album" className="w-full" />
          </figure>
          <div className="card-body w-1/2 mx-auto">
            <h2 className="text-3xl font-bold ml-9 lg:ml-16 mb-7">Login</h2>
            <form >
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
                <button className="btn bg-red-500 hover:bg-red-500 text-white input-bordered  w-full max-w-xs mt-3">
                  Register
                </button>
              </div>
            </form>
            <div className="ml-6 lg:ml-24">
              <p className=" text-sm mt-3">OR login with you</p>
            </div>
            <div className=" lg:flex  ml-16 lg:ml-24  mt-5">
              <FcGoogle  className="text-2xl text-sky-900 cursor-pointer" />
              <FaFacebookF className="text-2xl my-3 lg:my-0 lg:mx-9 text-sky-900 cursor-pointer" />
              <TfiLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
            </div>
            <div>
          <p className="ml-6 lg:ml-12 mt-0 lg:mt-5 cursor-pointer">Already have an account? <Link to='/signin' className="text-red-500 ml-6 lg:ml-0 font-bold">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
       
    );
};

export default Login;