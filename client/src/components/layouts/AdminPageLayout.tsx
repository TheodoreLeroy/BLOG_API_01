import { NavLink, useLocation, useNavigate } from 'react-router-dom';
function AdminPageLayout({ children, userRole }) {
    const navigate = useNavigate();
    const location = useLocation();


    // Sidebar menu item
    const menuItem = [
        {href: '/dashboard', label:'Dashboard'},
        {href: '/usermanager', label:'User Manager'},
        {href: '/blogmanager', label:'Blog Manager'},
        {href: '/settings', label:'Settings'},
    ]

    const handleLogout = () => {
        //localStorage.removeItem('accessToken');
        navigate('/');
    }

    return (<div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="hidden w-64 bg-white shadow-md md:block">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-blue-600">AdminPanel</h1>
            </div>
            <nav className="mt-6">
                {menuItem.map(item => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        active={location.pathname.startsWith(item.href)}
                    />
                ))}
            </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
            {/* Header */}
            <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
                <div className="flex items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Welcome back, {userRole}!</h2>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleLogout}
                        className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Dashboard Content */}
            <main className="p-8">
                {children}
            </main>
        </div>
    </div>);
}

function NavItem({ href, label, active = false }) {
    const baseClass = "flex items-center px-6 py-3 transition-colors font-medium";
    const activeClass = "border-r-4 border-blue-600 bg-gray-200 text-gray-700";
    const inactiveClass = "text-gray-600 hover:bg-gray-100 hover:text-gray-700";

    return (
        <a href={href} className={`${baseClass} ${active ? activeClass : inactiveClass}`}>
            <span className="mx-3">{label}</span>
        </a>
    );
}

export default AdminPageLayout;                                    