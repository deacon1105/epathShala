import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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