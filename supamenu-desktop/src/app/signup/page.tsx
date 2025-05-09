import InputField from "@/components/inputField";
import PasswordField from "@/components/passwordField";
import React from "react";

const Signup = () => {
  
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
          <h2 className="text-2xl font-bold mt-6 mb-2 text-center text-black text-shadow-sm ">
            Signup
          </h2>
        </div>
        <form method="POST">
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First name"
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last name"
          />
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="Phone number"
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Email address"
          />
          <PasswordField />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-transparent hover:text-amber-500 text-white shadow-lg font-bold py-2 px-4 rounded focus:outline-none border-2 border-amber-500 focus:shadow-outline w-full cursor-pointer my-4"
          >
            Log In
          </button>
        </form>
        <div className="m-2 text-center">
          Already have an account? {" "}
          <a href="/login" className="text-blue-500 hover:text-amber-500">
            Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default Signup;
