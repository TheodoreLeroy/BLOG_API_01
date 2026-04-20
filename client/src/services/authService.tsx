import { axiosInstance } from "./axiosClient";

interface User {
    id: number;
    username: string;
    role: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    accessToken: string | null;
    user: User | null;
}

/* Auth: 
/auth/login
/auth/register
*/
export const AuthService = {
    async login(data: LoginRequest): Promise<LoginResponse> {
        // Send request to auth/login
        const response = axiosInstance.post("/auth/login", data);
        console.log(response);
        return {
            accessToken: "",
            user: null,
        };
    },
};
