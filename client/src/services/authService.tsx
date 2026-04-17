import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axiosClient";
console.log(" auth service");
/* Auth: 
/auth/login
/auth/register
/auth/getme
*/
export const LoginService = async (credentials: any) => {
    const response = await axiosInstance.post("/auth/login", credentials);
    // Only handler data logic
    return response;
};

// Log out
export const LogoutService = () => {
    localStorage.clear();
    window.location.href = "/login";
};

export const GetMeService = () => {
    const response = axiosInstance.get("/auth/getme");
    return response;
};
