import { LoginForm } from "@/components/features/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
function Login() {
    const { user, isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            if (user?.role === "admin") {
                navigate("/admin/dashboard", { replace: true });
            } else {
                navigate("/home", { replace: true });
            }
        }
    }, [isAuthenticated, loading, user, navigate]);
    return (
        // Main login block
        <div
            className=" bg-white rounded-3xl shadow-xl transition-all duration-300
                  w-200 h-250 flex justify-center items-center"
        >
            <LoginForm />
        </div>
    );
}

export default Login;
