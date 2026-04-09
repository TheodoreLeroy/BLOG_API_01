/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match!");
            return;
        }

        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:5034/api/Auth/Register',
                data: {
                    username: username,
                    email: email,
                    password: password,
                    role: "user"
                }
            });

            if (response.status === 200 || response.status === 201) {
                alert("Successful");

                navigate('/Login');
            }
        } catch (error: any) {
            console.error(error.response?.data || error.message);
            alert(error.response?.data || "");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Register
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="johndoe"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Repeat your password"
                            required
                        />
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <label className="flex cursor-pointer items-center">
                            <input type="checkbox" className="mr-2" required />
                            I agree to the <a href="#" className="ml-1 text-blue-600 hover:underline">Terms & Conditions</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700"
                    >
                        Create Account
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a
                        onClick={() => navigate('/Login')}
                        className="font-medium text-blue-600 hover:underline cursor-pointer"
                    >
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;