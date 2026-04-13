import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./components/layouts/AuthLayout";
function App() {
    return (
        <AuthLayout>
            <Routes>
                {/* Authen page */}
                <Route path="/" element={<Login />} />
            </Routes>
        </AuthLayout>
    );
}

export default App;
