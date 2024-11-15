import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { isTokenExpired } from '../../utils/auth';
import axiosInstance from "../api/axiosInstance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            setIsAuthenticated(false);
            navigate("/login");
        }
        setIsAuthenticated(!!token);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axiosInstance.post("http://localhost:3000/api/v1/auth/login", {
                email: email,
                password: password
            })
            const token = response.data.data.token
            const username = response.data.data.username
            localStorage.setItem("token", token)
            setIsAuthenticated(true)
            setUser(jwtDecode(token))
            navigate("/")
        }
        catch (err) {
            throw new Error(err.response.data.message || "Login Failed");
        }

    }
    const logout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("error in useAuth function");
    }

    return context;
};

export default AuthProvider