import { AuthProvider } from "@/contexts/AuthContext";
import type { JSX } from "react";
import { Outlet } from "react-router-dom";

interface Props {
    children: JSX.Element;
}

export default function AppLayout() {
    return (
        <div
            id="auth-container"
            className="min-h-screen flex justify-center items-center"
        >
            <Outlet />
        </div>
    );
}
