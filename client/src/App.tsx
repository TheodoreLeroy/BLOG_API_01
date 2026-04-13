import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "@pages/auth/Login";
import AuthLayout from "@components/layouts/AuthLayout";

function App() {
    return (
        <>
            {/* Login and register */}
            <AuthLayout>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthLayout>
        </>
    );
}

export default App;
