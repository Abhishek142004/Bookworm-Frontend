import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#023047] border-gray-200 py-4">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="/assets/logon.png"
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Bookworm
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <div>
            <Link to={isAuthenticated ? "/cart" : "/need"}>
              <svg
                className="h-8 w-8 m-2 text-[#219ebc]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
              </svg>
            </Link>
          </div>
          <div className="text-[#8ecae6]">
            {isAuthenticated ? (
              <Link to="/profile">
                <button className="hover:bg-orange-400 rounded px-2 p-1 mx-2 font-semibold bg-[#ffb703] text-black">
                  Profile
                </button>
              </Link>
            ) : (
              <Link to="/register">
                <button className="transition duration-500 ease-in-out transform hover:scale-110 rounded px-2 p-1 mx-2 font-semibold bg-[#ffb703] text-black">
                  Login
                </button>
              </Link>
            )}
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/">
                <span
                  className="block py-2 pl-3 pr-4 lg:border-0 lg:p-0 text-gray-300 hover:bg-[#219ebc] hover:text-white lg:hover:bg-transparent border-gray-700"
                  aria-current="page"
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/category">
                <span className="block py-2 pl-3 pr-4 lg:border-0 lg:p-0 text-gray-300 hover:bg-[#219ebc] hover:text-white lg:hover:bg-transparent border-gray-700">
                  Category
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="block py-2 pl-3 pr-4 lg:border-0 lg:p-0 text-gray-300 hover:bg-[#219ebc] hover:text-white lg:hover:bg-transparent border-gray-700">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about/contact">
                <span className="block py-2 pl-3 pr-4 lg:border-0 lg:p-0 text-gray-300 hover:bg-[#219ebc] hover:text-white lg:hover:bg-transparent border-gray-700">
                  Contacts
                </span>
              </Link>
            </li>
            <li>
              <Link to={isAuthenticated ? "/balance" : "/need"}>
                <span className="block py-2 pl-3 pr-4 lg:border-0 lg:p-0 text-gray-300 hover:bg-[#219ebc] hover:text-white lg:hover:bg-transparent border-gray-700">
                  Balance
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
