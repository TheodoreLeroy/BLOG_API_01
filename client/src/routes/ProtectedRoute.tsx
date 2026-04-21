import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LoadingSpinner } from "@/components/commons/LoadingSpinner";
import { useState, type JSX } from "react";

interface Props {
    children: JSX.Element;
    role: string;
}

export default function ProtectedRoute({ children, role }: Props) {
    const { isAuthenticated, user, loading, finishLoading } = useAuth();
    try {
        if (loading)
            return (
                <div>
                    <LoadingSpinner />
                </div>
            );

        // if (!isAuthenticated) {
        //     console.log("No access token");
        //     throw new Error();
        // }

        if (role && user?.role !== role) {
            console.log("tuoi j?");
            return <Navigate to="/error" />;
        }
        return children;
    } catch (error) {
        return <Navigate to="/" />;
    } finally {
        finishLoading(false);
    }
}
