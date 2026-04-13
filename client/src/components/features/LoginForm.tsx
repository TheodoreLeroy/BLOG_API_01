import { Input } from "../common/Input";

export const LoginForm = () => {
    return (
        <form className="flex flex-col py-10 px-10">
            <Input label="Username" type="text" message="Enter your username" />
            <Input
                label="Password"
                type="password"
                message="Enter your password"
            />
        </form>
    );
};
