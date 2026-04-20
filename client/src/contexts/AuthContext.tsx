import {
    createContext,
    useContext,
    useEffect,
    useState,
    type JSX,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    username: string;
    role: string;
    isAuth: boolean;
}

interface AuthProps {
    children: JSX.Element;
}

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    // Run one time when app created
    useEffect(() => {
        const checkAuth = () => {
            const accessToken = localStorage.getItem("accessToken");
            try {
                // User have no access token
                if (!accessToken) {
                    setUser(null);
                    throw new Error();
                }
            } catch (error) {
                navigate("/");
            } finally {
                setIsLoading(false);
            }
        };
    }, []);
    // login
    const login = (userData: any) => {
        setUser(userData);
    };

    // logout
    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
