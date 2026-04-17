import { LoginForm } from "@/components/features/LoginForm";

function Register() {
    return (
        // Main login block
        <div
            className=" bg-white rounded-3xl shadow-xl transition-all duration-300
                  w-200 h-250 flex justify-center items-center"
        >
            <LoginForm />
        </div>
    );
}

export default Register;
