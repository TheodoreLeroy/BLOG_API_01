import { Input } from "../commons/Input";
import { Button } from "../commons/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface registerData {}

export const RegisterForm = () => {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = () => {};

    return (
        <div className="w-2/3 h-fit">
            <h1 className="mb-10">Hello, welcome to my website</h1>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Name */}
                <Input
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                />

                {/* Email */}
                <Input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                    })}
                />

                {errors.email && (
                    <p className="text-red-600 font-bold text-xl">
                        {errors.email.message as string}
                    </p>
                )}

                {/* Username */}
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

                {/* Password */}
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

                {/* Confirm password */}
                <Input
                    type="password"
                    placeholder="Confirm password"
                    {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                            value === watch("password") ||
                            "Password does not match",
                    })}
                />
                {errors.confirmPassword && (
                    <p className="text-red-600 font-bold text-xl">
                        {errors.confirmPassword.message as string}
                    </p>
                )}

                {/* {failLogin ? (
                    <p className="text-2xl text-red-500 font-bold">dafuq</p>
                ) : (
                    ""
                )} */}
                <Button
                    type="submit"
                    variant="primary"
                    message={isSubmitting ? "Registering..." : "Sign up"}
                    disabled={isSubmitting}
                />
            </form>

            <p className="text-gray-600 text-2xl mt-6 text-center">
                Already an user?{" "}
                <Link
                    to="/"
                    className="text-violet-600 font-semibold hover:text-violet-700 hover:underline transition-all"
                >
                    Sign in now
                </Link>
            </p>
        </div>
    );
};
