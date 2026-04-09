/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        // Kiểm tra token và role khi vào trang
        const accessToken = localStorage.getItem('accessToken');
        // Giả sử bạn lưu role vào localStorage hoặc lấy từ decode token
        // Ở đây tôi lấy ví dụ đơn giản từ localStorage
        const role = 'admin'; // Bạn có thể thay bằng logic thực tế

        if (!accessToken) {
            navigate('/'); // Quay lại trang login nếu chưa đăng nhập
        } else {
            setUserRole(role);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-blue-600">AdminPanel</h1>
                </div>
                <nav className="mt-6">
                    <a href="#" className="flex items-center px-6 py-3 text-gray-700 bg-gray-200 border-r-4 border-blue-600">
                        <span className="mx-3 font-medium">Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                        <span className="mx-3 font-medium">Users Manager</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                        <span className="mx-3 font-medium">Blogs Manager</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                        <span className="mx-3 font-medium">Settings</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Welcome back, {userRole}!</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Stat Card 1 */}
                        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-blue-500">
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Users</h3>
                            <p className="mt-2 text-3xl font-bold text-gray-800">1,284</p>
                            <span className="text-sm text-green-500">↑ 12% from last month</span>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-green-500">
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Revenue</h3>
                            <p className="mt-2 text-3xl font-bold text-gray-800">$42,450</p>
                            <span className="text-sm text-green-500">↑ 8% from last month</span>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-purple-500">
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Sessions</h3>
                            <p className="mt-2 text-3xl font-bold text-gray-800">156</p>
                            <span className="text-sm text-blue-500">Live now</span>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
                        <h3 className="mb-4 text-lg font-bold text-gray-800">Recent Activities</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b text-gray-400 uppercase">
                                        <th className="pb-3 font-medium">User</th>
                                        <th className="pb-3 font-medium">Action</th>
                                        <th className="pb-3 font-medium">Date</th>
                                        <th className="pb-3 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-gray-600">
                                    <tr>
                                        <td className="py-4">Hùng Anh</td>
                                        <td className="py-4">Login System</td>
                                        <td className="py-4">2026-04-09</td>
                                        <td className="py-4 text-green-600 font-medium">Success</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">Trúc Quỳnh</td>
                                        <td className="py-4">Update Profile</td>
                                        <td className="py-4">2026-04-08</td>
                                        <td className="py-4 text-blue-600 font-medium">Pending</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;