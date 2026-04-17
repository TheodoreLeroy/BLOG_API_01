import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LoadingSpinner } from "@/components/commons/LoadingSpinner";

export default function ProtectedRoute({ children, role }: any) {
    const { isAuthenticated, loading, user } = useAuth();

    if (loading)
        return (
            <div>
                <LoadingSpinner />
            </div>
        );

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />;
    }

    if (role && user?.role !== role) {
        console.log("tuoi j?");
        return <Navigate to="/error" />;
    }
    return children;
}
