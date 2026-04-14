import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./components/layouts/AuthLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import ProtectedRoute from "./services/protectedRoute";
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            {/* Public page */}
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/error" element={<Error />} />
            </Route>

            {/* Admin and user */}
            <Route
                element={<ProtectedRoute allowedRoles={["admin", "user"]} />}
            >
                <Route element={<AdminLayout />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Route>

            {/* Only for admin */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route element={<AdminLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
