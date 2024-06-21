// Logout.js
import React from "react";
import { useAuth } from "../../../store/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="transition duration-500 ease-in-out transform hover:scale-110 hover:bg-[#023047] rounded px-2 p-1 mx-2 font-semibold bg-[#ffb703] text-black"
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Logout;
