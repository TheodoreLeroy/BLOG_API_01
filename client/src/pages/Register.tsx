import React from "react";
import { RegisterForm } from "../components/features/RegisterForm";

const Register = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-violet-400 p-4">
            <div className="w-full max-w-[480px] rounded-2xl bg-white p-10 text-center shadow-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-black">
                    Register
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    Exprience our website
                </p>

                <RegisterForm />

                <p className="mt-6 text-sm text-gray-600">
                    Already have account?{" "}
                    <a
                        href="/login"
                        className="font-semibold text-[#8B5CF6] hover:underline"
                    >
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
