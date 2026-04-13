import { Input } from "../common/Input";

export const LoginForm = () => {
    const handleSubmit = () => {
        return null;
    };
    return (
        <form onSubmit={handleSubmit} className="my-6 mx-10 flex flex-col">
            <Input label="Username" type="text" message="Enter an username" />
            <Input
                label="Password"
                type="password"
                message="Enter a password"
            />
        </form>
    );
};
