import { LoginForm } from "../features/LoginForm";
import { type JSX } from "react/jsx-dev-runtime";
interface Props {
    children: JSX.Element;
}

function AuthLayout({ children }) {
    return (
        <div
            id="auth-container"
            className="w-full h-full flex items-center justify-center bg-violet-400"
        >
            {children}
        </div>
    );
}

export default AuthLayout;
