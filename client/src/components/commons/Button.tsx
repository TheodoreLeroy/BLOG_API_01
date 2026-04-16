export const Button = ({ message, ...props }) => {
    return (
        <button
            {...props}
            className="w-full h-20 rounded-2xl bg-blue-500 text-3xl font-bold text-white
            shadow-md shadow-blue-500 cursor-pointer
            transition-all duration-300
            hover:shadow-2xl hover:bg-violet-600
            active:shadow-lg
            active:translate-y-0
            active:scale-95
            "
        >
            {message}
        </button>
    );
};
