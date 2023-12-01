import React from "react";
import registerImg from "../../assets/others/authentication1.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import { Helmet } from "react-helmet-async";

const SignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    });
    
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign In</title>
      </Helmet>

      <div className="my-24">
        <div className="card lg:card-side bg-base-100">
          <figure className="w-1/2 mx-auto">
            <img src={registerImg} alt="Album" className="w-full" />
          </figure>
          <div className="card-body w-1/2 mx-auto">
            <h2 className="text-3xl font-bold ml-9 lg:ml-16 mb-7">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="">
                  <label className="font-semibold ml-3">Name</label> <br />
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input input-bordered input-md w-full max-w-xs mt-3"
                  />
                  <p>
                    {errors.name && (
                      <span className="text-red-600">
                        Name field is required
                      </span>
                    )}
                  </p>
                </div>
                <div className="">
                  <label className="font-semibold ml-3">Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="Your Email"
                    className="input input-bordered input-md w-full max-w-xs mt-3"
                  />
                  <p>
                    {errors.email && (
                      <span className="text-red-600">
                        Email field is required
                      </span>
                    )}
                  </p>
                </div>
                <div className="">
                  <label className="font-semibold ml-3">Comfirm Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}/,
                    })}
                    placeholder="Type password"
                    className="input input-bordered input-md w-full max-w-xs mt-3"
                  />
                  <p>
                    {errors.password?.type === "required" && (
                      <span className="text-red-600">
                        Password field is required
                      </span>
                    )}
                  </p>
                  <p>
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-600">
                        Password must be 6 characters
                      </span>
                    )}
                  </p>
                  <p>
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-600">
                        Password must be 20 characters
                      </span>
                    )}
                  </p>
                  <p>
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-600">
                        Password must be one lowercase and one uppercase and one
                        special characters
                      </span>
                    )}
                  </p>
                </div>
                <input
                  className="btn bg-red-500 hover:bg-red-500 text-white input-bordered  w-full max-w-xs mt-3"
                  type="submit"
                  value="Register"
                />
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
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-500 ml-6 lg:ml-0 font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
