// import type { AxiosResponse } from "axios";
import { AuthSerivce } from "@/services/authService";
import { createContext, useState, type JSX, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface User {
    id: number;
    username: string;
    role: string;
}

interface UserLoginRequest {
    username: string;
    password: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: UserLoginRequest) => void;
    logout: () => void;
}

interface AuthProps {
    children: JSX.Element;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    console.log(user);
    const navigate = useNavigate();
    // Check access token page first load
    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = localStorage.getItem("accessToken");
            try {
                if (!accessToken) {
                    await setUser(null);
                    throw new Error("No access token");
                }

                const getMeRespo

                return;
            } catch (error) {
                console.log(error.message);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (requestData?: UserLoginRequest) => {
        try {
            // Handler login
            const serviceResponse = await AuthSerivce.login(requestData);
            const userExtract = serviceResponse.user;
            // Set user
            setUser({
                id: userExtract.id,
                username: userExtract.username,
                role: userExtract.role,
            });
            // Save token
            localStorage.setItem("accessToken", serviceResponse.accessToken);

            // Navigate
            if (userExtract.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/home");
            }
        } catch (error) {
            alert(error.data);
        }
    };

    const logout = async () => {
        await setUser(null);
        localStorage.removeItem("accessToken");
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
