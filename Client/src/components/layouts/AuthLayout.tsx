import { type JSX } from "react";
interface Props {
    children: JSX.Element;
}

function AuthLayout({ children }: Props) {
    return (
        <div className="flex w-screen h-screen items-center justify-center bg-violet-500">
            {children}
        </div>
    );
}

export default AuthLayout;
