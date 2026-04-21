// import type { AxiosResponse } from "axios";
import { AuthService } from "@/services/authService";
import { axiosInstance } from "@/services/axiosClient";
import { createContext, useState, type JSX, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

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
    finishLoading: (state: boolean) => void;
    login: (userData: UserLoginRequest) => void;
    logout: () => void;
}

interface AuthProps {
    children: JSX.Element;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        // call getme
        axiosInstance
            .get("/auth/getme")
            // ok response
            .then((response) => {
                const data = response.data;
                setUser({
                    id: data["id"],
                    username: data["username"],
                    role: data["role"],
                });
            })
            // unauthorize
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    const login = async (requestData?: UserLoginRequest) => {
        try {
            // Handler login
            const serviceResponse = await AuthService.login(requestData);
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
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
    };

    const finishLoading = (state: boolean) => {
        setLoading(state);
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        loading,
        finishLoading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
