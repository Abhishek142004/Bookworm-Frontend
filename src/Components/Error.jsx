import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-violet-500 mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
