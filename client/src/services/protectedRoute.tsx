import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    role: string;
}

interface Props {
    allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: Props) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        return <Navigate to="/error" replace />;
    }

    try {
        const decoded: DecodedToken = jwtDecode(accessToken);
        const userRole = decoded.role.toLowerCase();
        const isAuthorized = allowedRoles
            .map((r) => r.toLowerCase())
            .includes(userRole);

        return isAuthorized ? <Outlet /> : <Navigate to="/error" replace />;
    } catch (error) {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;
