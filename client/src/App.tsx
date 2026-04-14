import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./components/layouts/AuthLayout";
import Register from "./pages/Register";
function App() {
    return (
        <AuthLayout>
            <Routes>
                {/* Authen page */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthLayout>
    );
}

export default App;
