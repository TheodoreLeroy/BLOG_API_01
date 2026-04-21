import "./assets/App.css";
import { Routes, Route, Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/commons/LoadingSpinner";
import ProtectedRoute from "./routes/ProtectedRoute";
// import Home from "@pages/user/Home";
const Login = lazy(() => import("@pages/auth/Login"));
const Register = lazy(() => import("@pages/auth/Register"));
const Dashboard = lazy(() => import("@pages/admin/Dashboard"));
const UserManager = lazy(() => import("@pages/admin/UserManager"));
const BlogManager = lazy(() => import("@pages/admin/BlogManager"));
const AdminSetting = lazy(() => import("@pages/admin/AdminSetting"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const AdminLayout = lazy(() => import("@components/layouts/AdminLayout"));
const AuthLayout = lazy(() => import("@components/layouts/AuthLayout"));
const AppLayout = lazy(() => import("@components/layouts/AppLayout"));
const Home = lazy(() => import("@pages/user/Home"));
const Blog = lazy(() => import("@pages/user/Blog"));
const NewBlog = lazy(() => import("@pages/user/NewBlog"));
const About = lazy(() => import("@pages/user/About"));
const UserInfo = lazy(() => import("@pages/user/UserInfo"));
const UserSetting = lazy(() => import("@pages/user/UserSetting"));

function App() {
    return (
        <>
            {/* Login and register */}

            <AuthProvider>
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        {/* Auth pages */}
                        <Route element={<AuthLayout />}>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>

                        {/* Admin pages */}
                        <Route element={<AdminLayout />}>
                            <Route
                                path="/admin/dashboard"
                                element={<Dashboard />}
                            />
                            <Route
                                path="/admin/usermanager"
                                element={<UserManager />}
                            />
                            <Route
                                path="/admin/blogmanager"
                                element={<BlogManager />}
                            />
                            <Route
                                path="/admin/settings"
                                element={<AdminSetting />}
                            />
                        </Route>

                        {/* User pages */}
                        <Route element={<AppLayout />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/post_blog" element={<NewBlog />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/user" element={<UserInfo />} />
                            <Route path="/settings" element={<UserSetting />} />
                        </Route>

                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="*" element={<h1>Page not found</h1>} />
                    </Routes>
                </Suspense>
            </AuthProvider>
        </>
    );
}

export default App;
