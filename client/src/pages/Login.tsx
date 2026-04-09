/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:5034/api/auth/login',
                data: {
                username: username,
                password: password,
                }
            });

            if (response.status == 200) {
                const accessToken = response.data.accessToken;
                if (accessToken) {
                    localStorage.setItem('accessToken', accessToken);
                    console.log('Successfully save token!')
                }
                if (response.data.role == 'admin') {
                    console.log('navigating to dashboard!');
                    navigate('/Dashboard');
                } else {
                    console.log('navigating to other!');
                    navigate('/Blog');
                }
            }

            console.log(response);
        } catch (error: any) {
            console.log('Incorrect password!');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="admin"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm text-blue-600">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="hover:underline">Forgot password</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Not an user yet?{' '}
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                        Register now
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;