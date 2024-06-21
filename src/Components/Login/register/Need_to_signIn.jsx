import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Need_to_signIn = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl text-[#023047] font-bold  mb-4">
            NOT ACCESSIBLE
          </h1>
          <p className="text-2xl font-semibold mb-4">NEED TO SIGN IN</p>
          <p className="text-gray-600 mb-8">
            Sorry, Some Features Can Only Be Obtained After Login
          </p>
          <Link
            to="/register"
            className="inline-block bg-[#219ebc] text-white py-2 px-4 rounded-lg  transition duration-300"
          >
            Register/Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Need_to_signIn;
