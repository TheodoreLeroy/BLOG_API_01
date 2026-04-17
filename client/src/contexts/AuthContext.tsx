import { GetMeService } from "@/services/authService";
import type { AxiosResponse } from "axios";
import { createContext, useState, type JSX, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface User {
    username: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: User) => void;
    logout: () => void;
}

interface AuthProps {
    children: JSX.Element;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    // Check access token page first load
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("accessToken");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await GetMeService();
                setUser(response.data);
            } catch (error) {
                localStorage.removeItem("accessToken");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkToken();
    }, []);

    const login = (responseData?: any) => {
        // Handler login
        const username = responseData.username;
        const role = responseData.role;
        setUser({ username: username, role: role });
        // Save token
        localStorage.setItem("accessToken", responseData.accessToken);

        // Navigate
        if (role === "admin") {
            navigate("/admin/dashboard");
        } else {
            navigate("/home");
        }
    };

    const logout = () => {
        setUser(null);
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
