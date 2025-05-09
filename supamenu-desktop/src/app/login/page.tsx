import React from "react";

import InputField from "@/components/inputField";
import PasswordField from "@/components/passwordField";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-amber-500 text-gray-600">
      <div className=" mb-8 w-1/2">
        <h1 className="text-6xl font-bold mb-6 text-center">
          <span className="text-black">Supa</span>
          <span className="text-white">Menu</span>
        </h1>
      </div>
      <div className="bg-white p-8 rounded shadow-md lg:w-1/3 md:w-3/5 w-4/5">
        <div className="text-center mb-6">
          <h1 className="text- ">Welcome</h1>
          <h2 className="text-2xl font-bold mt-6 mb-2 text-center text-black text-shadow-sm ">
            Login to Supamenu
          </h2>
          <p className="">Enter you email and password below</p>
        </div>
        <form method="POST">
          <InputField name="email" label="Email" placeholder="Enter email address" type="email" />
          <PasswordField />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-transparent hover:text-amber-500 text-white shadow-lg font-bold py-2 px-4 rounded focus:outline-none border-2 border-amber-500 focus:shadow-outline w-full cursor-pointer my-4"
          >
            Log In
          </button>
        </form>
        <div className="m-2 text-center">
          Don&#39;t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:text-amber-500">
            Signup
          </a>
        </div>
        <div className="m-2 text-center">
          Forgot your password?{" "}
          <a href="#" className="text-blue-500 hover:text-amber-500">
            Reset
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
