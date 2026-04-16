import { createContext, useContext, useState, type JSX } from "react";

interface AuthContextType {
    username: string;
    role: string;
    isAuth: boolean;
}

interface AuthProps{
    children: JSX.Element
}

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState(null);

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
