import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export const useAuth = () => {
    try {
        const authContext = useContext(AuthContext);
        if (!authContext) {
            throw new Error();
        }
        return authContext;
    } catch (error) {
        console.log(error.message);
    }
};
