import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
  const navigate = useNavigate();
  const { storeTokenLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages
    try {
      const response = await fetch(
        "https://bookworm-backend-qj4r.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        storeTokenLS(token);
        setUser({ username: "", email: "", password: "" });
        toast.success("Registration Successful");
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.msg || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please try again later.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages
    try {
      const response = await fetch(
        "https://bookworm-backend-qj4r.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        storeTokenLS(token);
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.msg || "Invalid credentials. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please try again later.");
    }
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage(""); // Clear error messages when toggling between signup and login
  };

  return (
    <div className="max-h-screen bg-gray-100 flex justify-center items-center">
      <Link to="/" className="pointer">
        <div className="absolute top-[20px] right-[20px] lg:right-[150px]">
          <svg
            className="h-8 w-8 lg:h-16 lg:w-16 lg:text-slate-100 md:text-black "
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </Link>
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex space-x-4 text-lg justify-center items-center">
            <p>{isSignUp ? "Already a Member?" : "New Member?"}</p>
            <button
              id="Button"
              className="mt-2 tracking-wide font-semibold bg-[#219ebc] text-gray-100 p-1 px-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              onClick={handleToggle}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              {isSignUp ? "Sign up" : "Sign in"}
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#219ebc] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  {isSignUp && (
                    <span className="ml-4">Sign Up with Google</span>
                  )}
                  {!isSignUp && (
                    <span className="ml-4">Sign In with Google</span>
                  )}
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or {isSignUp ? "Sign In" : "Sign Up"} with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                {errorMessage && (
                  <div className="text-red-500 text-center mb-4">
                    {errorMessage}
                  </div>
                )}
                <input
                  className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${
                    isSignUp ? "block" : "hidden"
                  }`}
                  type="name"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-[#219ebc] text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={isSignUp ? handleSignup : handleLogin}
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </span>
                </button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Bookworm's{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#023047] text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('./assets/11683776_4782261.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
