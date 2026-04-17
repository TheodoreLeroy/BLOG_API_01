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
const Home = lazy(() => import("@pages/user/Home"));

function App() {
    return (
        <>
            {/* Login and register */}

            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    {/* Auth page */}
                    <Route element={<AuthLayout />}>
                        <Route path="/" element={<Login />} />
                        {/* <Route path="/login" element={<Login />} /> */}
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route path="/home" element={<Home />} />

                    {/* Admin page */}
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute role="admin">
                                <AdminLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="user_manager" element={<UserManager />} />
                        <Route path="blog_manager" element={<BlogManager />} />
                        <Route path="setting" element={<AdminSetting />} />
                    </Route>

                    {/* Error page */}
                    <Route path="/error" element={<ErrorPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
