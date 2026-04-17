import { Link, useNavigate } from "react-router-dom";
import { Button } from "../commons/Button";
import { Input } from "../commons/Input";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { GetMeService, LoginService } from "@/services/authService";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
    console.log("login page");
    const navigate = useNavigate();
    const { login, loading, isAuthenticated } = useAuth();
    const [failLogin, setFailLogin] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    // Handler form submit
    const onSubmit = async (data) => {
        try {
            // 1. login service handle
            const response = await LoginService({
                username: data.username,
                password: data.password,
            });

            if (response.status === 200 || response.status === 201) {
                // 2. save user to context
                login(response.data);
            }
        } catch (error) {
            setFailLogin(false);
            console.error("Fail login:", error);
        }
    };

    return (
        <div className="w-2/3 h-fit">
            <h1 className="mb-10">Hello, welcome to my website</h1>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    type="text"
                    placeholder="Username"
                    {...register("username", {
                        required: "Username is required",
                    })}
                />

                {errors.username && (
                    <p className="text-red-600 font-bold text-xl">
                        {errors.username.message as string}
                    </p>
                )}

                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 chars",
                        },
                        maxLength: {
                            value: 32,
                            message: "Password must be at most 32 chars",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-600 font-bold text-xl">
                        {errors.password.message as string}
                    </p>
                )}
                {!failLogin ? (
                    <p className="text-2xl text-red-500 font-bold">
                        User not exist
                    </p>
                ) : (
                    ""
                )}
                <Button
                    type="submit"
                    message={isSubmitting ? "Logging in..." : "Sign In"}
                    disabled={isSubmitting}
                />
            </form>

            <p className="text-gray-600 text-2xl mt-6 text-center">
                Not an user yet?{" "}
                <Link
                    to="/register"
                    className="text-violet-600 font-semibold hover:text-violet-700 hover:underline transition-all"
                >
                    Register now
                </Link>
            </p>
        </div>
    );
};
