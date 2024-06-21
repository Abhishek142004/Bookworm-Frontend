// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [User, setUser] = useState("");

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const storeTokenLS = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const clearTokenLS = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const logout = () => {
    clearTokenLS();
    // Additional logout actions can be added here (e.g., clear user data)
  };

  const userAuthentication = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://bookworm-backend-qj4r.onrender.com/api/auth/user",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setUser(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, storeTokenLS, clearTokenLS, logout, User }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
