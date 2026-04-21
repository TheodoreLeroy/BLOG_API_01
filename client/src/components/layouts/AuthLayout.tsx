import { useAuth } from "@/hooks/useAuth";
import { useEffect, type JSX } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div
            id="auth-container"
            className="min-h-screen flex justify-center items-center bg-violet-400"
        >
            <Outlet />
        </div>
    );
}
