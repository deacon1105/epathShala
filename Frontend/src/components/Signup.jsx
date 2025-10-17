import React from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log("Signup successful:", res.data)
        if (res.data) {
          toast.success('Sign Up Successful!');
          navigate(from, { replace: true });
           localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Signup failed. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="w-[500px] bg-base-100 dark:bg-gray-800 dark:text-white p-6 rounded-md shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close Button */}
          <div className="flex justify-end">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost">
              ✕
            </Link>
          </div>

          <h3 className="font-bold text-lg mb-4">Signup</h3>

          {/* Name */}
          <div className="mb-4">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 py-2 border rounded-md outline-none mt-1"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none mt-1"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none mt-1"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-start space-y-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>

            <p>
              Already have an account?{" "}
              <Link to="/" className="underline text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;