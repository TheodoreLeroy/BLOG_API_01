import { Navigate } from 'react-router-dom';
import axiosInstance from '@services/axiosClient';
import { useState, type JSX, useEffect } from 'react';
interface Props {
    children: JSX.Element;
    requiredRole?: string;
}

const ProtectedRoute = ({ children, requiredRole }: Props) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    
    const accessToken = localStorage.getItem("accessToken");

    // Check access token
    if (!accessToken) {
        return <Navigate to='/login' replace/>;
    }

    useEffect(() => {
        // Chỉ gọi API 1 lần duy nhất khi Mounting
        axiosInstance.get('/auth/getme')
            .then(res => {
                if (requiredRole && res.data.role !== requiredRole) {
                    setIsAuth(false);
                } else {
                    setIsAuth(true);
                }
            })
            .catch(() => setIsAuth(false));
    }, [requiredRole]);



    // Waiting screen
    if (isAuth === null) return <div>Loading...</div>;

    if (!isAuth) {
        return <Navigate to="/login" replace/>
    }

    // Nếu mọi thứ ổn, mới cho phép "Mounting" children
    return children;
};

export default ProtectedRoute;