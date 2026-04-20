import { axiosInstance } from "./axiosClient";
import { TokenHandler } from "@utils/TokenHandler";
interface User {
    id: number | null;
    username: string | null;
    role: string | null;
}

interface LoginRequest {
    username: string | "";
    password: string | "";
}

interface LoginResponse {
    accessToken: string;
    user: User;
}
/* Auth: 
/auth/login
/auth/register
/auth/getme
*/

export const AuthSerivce = {
    async login(data: LoginRequest): Promise<LoginResponse> {
        try {
            // Send login request
            const response = await axiosInstance.post("/auth/login", data);
            const responseData = response?.data;
            const accessToken = responseData.accessToken;
            const payload = TokenHandler.DecodeJwtToken(accessToken);
            return {
                accessToken: accessToken,
                user: payload,
            };
        } catch (error) {
            console.log(error.data);
            console.log("Return with status code", error.status);
            return Promise.reject(error);
        }
    },

    async getme(): Promise<User> {
        try {
            const response = await axiosInstance.get("/auth/getme");
            const responseData = response?.data;
            return {
                id: responseData.id,
                username: responseData.username,
                role: responseData.role,
            };
        } catch (error) {
            console.log(error.message);
        }
    },
};
