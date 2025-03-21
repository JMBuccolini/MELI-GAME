"use client";

import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
} from "@/api/auth.js";

import { createContext, useState, useContext, useEffect } from "react";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true)

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      
      setUser(res.data);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(res.data))
    } catch (error) { 
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const router = useRouter();

  const logout = () => {
    router.push("/");
    setTimeout(() => {
      setUser(null);
      setIsAuthenticated(false);
      Cookies.remove("token");
      localStorage.removeItem("user")
    }, 1000);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      const storedUser = localStorage.getItem("user")

      if (cookies.token) {
        try {
          const res = await verifyTokenRequest(cookies.token);
          if (!res.data) return setIsAuthenticated(false);
          setIsAuthenticated(true);
          setUser(res.data);
          localStorage.setItem("user",JSON.stringify(res.data))
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          localStorage.removeItem("user")
        }
      }else if (storedUser){
        setIsAuthenticated(true)
        setUser(JSON.parse(storedUser))
      }
      setLoading(false)
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin, user, isAuthenticated, errors, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
