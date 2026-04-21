import { RegisterForm } from "@/components/features/RegisterForm";

function Register() {
    return (
        // Main login block
        <div
            className=" bg-white rounded-3xl shadow-xl transition-all duration-300
                  w-200 h-250 flex justify-center items-center"
        >
            <RegisterForm />
        </div>
    );
}

export default Register;
