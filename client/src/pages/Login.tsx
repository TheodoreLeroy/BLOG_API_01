import { LoginForm } from "../components/features/LoginForm";

function Login() {
    return (
        <div
            className="w-96 min-h-fit rounded-3xl 
        shadow-purple-500 shadow-right bg-white flex flex-col
        "
        >
            <h1 className="text-4xl w-fit">My web</h1>
            <LoginForm />
        </div>
    );
}

export default Login;
