import { jwtDecode } from "jwt-decode";

interface attributeExtract {
    id: number;
    username: string;
    role: string;
}

export const TokenHandler = {
    DecodeJwtToken(accessToken: string): attributeExtract {
        const payload = jwtDecode(accessToken);
        return {
            id: payload["nameid"],
            username: payload["unique_name"],
            role: payload["role"],
        };
    },
};
