import { useState } from "react";
import { LoginForm } from "../components/features/LoginForm";

function Login() {
    return (
        <div className="flex h-screen items-center justify-center bg-violet-400">
            <div className="w-full max-w-[450px] rounded-2xl bg-white p-12 text-center shadow-xl mx-4">
                <h1 className="text-4xl font-bold tracking-tight text-black">
                    My web
                </h1>
                <p className="mt-2 text-sm text-gray-500">Welcome Back!</p>

                <LoginForm />
            </div>
        </div>
    );
}

export default Login;
