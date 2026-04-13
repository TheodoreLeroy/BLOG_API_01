/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axiosClient';
import AdminPageLayout from '@layouts/AdminPageLayout';
function Dashboard() {
    // State: re-render screen when value changed
    //const [userRole, setUserRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <AdminPageLayout userRole={'userRole'}>
            {/* Dashboard Content */}
            <main className="p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Stat Card 1 */}
                    <div className="rounded-xl border-t-4 border-blue-500 bg-white p-6 shadow-md">
                        <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase">Total Users</h3>
                        <p className="mt-2 text-3xl font-bold text-gray-800">1,284</p>
                        <span className="text-sm text-green-500">↑ 12% from last month</span>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="rounded-xl border-t-4 border-green-500 bg-white p-6 shadow-md">
                        <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase">Revenue</h3>
                        <p className="mt-2 text-3xl font-bold text-gray-800">$42,450</p>
                        <span className="text-sm text-green-500">↑ 8% from last month</span>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="rounded-xl border-t-4 border-purple-500 bg-white p-6 shadow-md">
                        <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase">Active Sessions</h3>
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
                                    <td className="py-4 font-medium text-green-600">Success</td>
                                </tr>
                                <tr>
                                    <td className="py-4">Trúc Quỳnh</td>
                                    <td className="py-4">Update Profile</td>
                                    <td className="py-4">2026-04-08</td>
                                    <td className="py-4 font-medium text-blue-600">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </AdminPageLayout>
    );
}

export default Dashboard;