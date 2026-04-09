import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    BarChart3,
    Settings,
    Search,
    Bell,
    Menu,
    X
} from 'lucide-react';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-slate-200 transition-all duration-300 flex flex-col`}>
                <div className="flex items-center gap-4 border-b border-slate-100 p-6">
                    <div className="rounded-lg bg-indigo-600 p-2 text-white">
                        <LayoutDashboard size={24} />
                    </div>
                    {isSidebarOpen && <span className="text-xl font-bold tracking-tight">AdminUI</span>}
                </div>

                <nav className="flex-1 space-y-2 p-4">
                    <NavItem icon={<LayoutDashboard size={20} />} label="Tổng quan" active={true} isOpen={isSidebarOpen} />
                    <NavItem icon={<Users size={20} />} label="Người dùng" isOpen={isSidebarOpen} />
                    <NavItem icon={<BarChart3 size={20} />} label="Báo cáo" isOpen={isSidebarOpen} />
                    <NavItem icon={<Settings size={20} />} label="Cài đặt" isOpen={isSidebarOpen} />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-md">
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className="w-64 rounded-full border-none bg-slate-100 py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
                        </button>
                        <div className="h-8 w-8 rounded-full border border-indigo-200 bg-indigo-100"></div>
                    </div>
                </header>

                {/* Dashboard Body */}
                <div className="space-y-8 overflow-y-auto p-8">
                    <div>
                        <h1 className="text-2xl font-bold">Chào buổi sáng, Hùng Anh!</h1>
                        <p className="text-sm text-slate-500">Dưới đây là những gì đang diễn ra với dự án của bạn hôm nay.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Doanh thu" value="$12,840" growth="+12.5%" />
                        <StatCard title="Người dùng mới" value="1,240" growth="+5.2%" />
                        <StatCard title="Tỷ lệ chuyển đổi" value="3.42%" growth="-0.4%" isNegative />
                        <StatCard title="Thời gian trung bình" value="4m 32s" growth="+1.2%" />
                    </div>

                    {/* Placeholder for Table/Chart */}
                    <div className="flex h-64 items-center justify-center rounded-xl border border-2 border-dashed border-slate-200 bg-white p-6 shadow-sm">
                        <p className="font-medium text-slate-400">Biểu đồ thống kê sẽ hiển thị ở đây</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

/* Sub-components */

const NavItem = ({ icon, label, active = false, isOpen }: { icon: React.ReactNode, label: string, active?: boolean, isOpen: boolean }) => (
    <div className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
        {icon}
        {isOpen && <span className="text-sm font-medium">{label}</span>}
    </div>
);

const StatCard = ({ title, value, growth, isNegative = false }: { title: string, value: string, growth: string, isNegative?: boolean }) => (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className="mt-2 flex items-end justify-between">
            <h3 className="text-2xl font-bold">{value}</h3>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${isNegative ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {growth}
            </span>
        </div>
    </div>
);

export default Dashboard;