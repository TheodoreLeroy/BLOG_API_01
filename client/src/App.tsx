import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import AuthLayout from "./components/layouts/AuthLayout";
import ErrorPage from "./pages/ErrorPage";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/admin/Dashboard";
function App() {
    return (
        <>
            {/* Login and register */}
            <AuthProvider>
                <AuthLayout>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/error" element={<ErrorPage />} />

                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </AuthLayout>
            </AuthProvider>
        </>
    );
}

export default App;
