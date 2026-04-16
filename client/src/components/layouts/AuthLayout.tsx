import { type JSX } from "react";
import { Outlet } from "react-router-dom";
interface Props {
    children: JSX.Element;
}

export default function AuthLayout({ children }: Props) {
    return (
        <div
            id="auth-container"
            className="min-h-screen flex justify-center items-center bg-violet-400"
        >
            {children}
        </div>
    );
}
