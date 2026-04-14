import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../../services/axiosClient";
import { Link, useNavigate } from "react-router-dom";
export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    localStorage.clear();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send login request
            await axiosInstance.post("/auth/login", {
                username: username,
                password: password,
            });

            // Get user role
            const response = await axiosInstance.get("/auth/getme");

            const role = response.data.role;

            if (role === "admin") {
                navigate("/dashboard");
            } else {
                navigate("/home");
            }
        } catch (error) {
            console.log("Fail log in");
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6 w-full">
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="w-full rounded-xl bg-black p-4 font-semibold text-white 
                     transition hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
                >
                    Sign In
                </button>
            </form>
            <p className="mt-6 text-sm text-gray-600">
                Doesn't have an account?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-[#8B5CF6] hover:underline"
                >
                    Register
                </Link>
            </p>
        </>
    );
};
