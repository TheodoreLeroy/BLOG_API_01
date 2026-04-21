export const Input = ({
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div
            className="h-16 text-xl bg-white border-2 rounded-xl 
                border-gray-200 hover:border-violet-600 focus-within:border-violet-600 
                shadow-sm hover:shadow-md transition-all duration-300 
                flex items-center overflow-hidden"
        >
            <input
                type=""
                {...props}
                className="w-full h-full px-5 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            ></input>
        </div>
    );
};
