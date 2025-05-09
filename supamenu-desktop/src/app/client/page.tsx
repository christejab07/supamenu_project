import UnderlineInput from "@/components/UnderlineInput";
import React from "react";

const Client = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 text-gray-600">
      <div className="bg-white px-12 py-6 rounded shadow-md w-2/5">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mt-6 mb-2 text-center text-black text-shadow-sm ">
            Signup
          </h2>
        </div>
        <form method="POST">
            <UnderlineInput label="Client" name="clientName" type="text" placeholder="Enter client name" />
            <UnderlineInput label="Category" name="category" type="text" placeholder="Enter client category" />
            <UnderlineInput label="Representative" name="representative" type="text" placeholder="Enter client representative" />
            <UnderlineInput label="Date of creation" name="dateOfCreation" type="date" placeholder="Enter the date of creation" />
            <UnderlineInput label="Address" name="address" type="text" placeholder="Enter address" />
            <UnderlineInput label="Email" name="email" type="text" placeholder="Enter email address" />
            <UnderlineInput label="Phone" name="phone" type="text" placeholder="Enter phone number" />
            <UnderlineInput label="Bank account" name="bankAccount" type="number" placeholder="Enter the bank account number" />
            <button
            type="submit"
            className="bg-amber-500 hover:bg-transparent hover:text-amber-500 text-white shadow-lg font-bold py-2 px-4 rounded focus:outline-none border-2 border-amber-500 focus:shadow-outline w-full cursor-pointer my-4"
          >
            Add client
          </button>
        </form>
      </div>
    </div>
  );
};

export default Client;
