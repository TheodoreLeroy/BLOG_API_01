import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axiosClient";

/* Auth: 
/auth/login
/auth/register
*/
export const LoginService = async (credentials: any) => {
    const navigate = useNavigate();
    try {
        const response = await axiosInstance.post("/auth/login", credentials);
        // // Check response status
        // if (response.status === 200 || response.status === 201) {
        //     // Get access token from response
        //     const accessToken = response.data?.accessToken;
        //     // Check if access token exist in response data?
        //     if (accessToken) {
        //         // Save to local storage
        //         localStorage.setItem("accessToken", accessToken);
        //         console.log("Save token ok");
        //     }
        //     // Redirect base on user role
        //     if (response.data.role === "admin") {
        //         navigate("/dashboard");
        //     } else {
        //         navigate("/home");
        //     }
        // }
        return response.data;
    } catch (error: any) {
        // Check if user not found or incorrect api
        if (error.response?.status === 404) {
            console.log("user not found");
        }
        throw error;
    }
};

// Log out
export const LogoutService = () => {
    localStorage.clear();
    window.location.href = "/login";
};
