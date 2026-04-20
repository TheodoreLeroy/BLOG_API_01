interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    message: string;
    variant?: variant;
    className?: string;
}

type variant = "primary" | "danger" | "outline";

export const Button = ({
    message,
    variant = "primary",
    className = "",
    ...props
}: Props) => {
    const baseStyle =
        "w-full h-20 rounded-2xl text-3xl font-bold cursor-pointer shadow-md transition-all duration-300 active:shadow-lg active:translate-y-0 active:scale-95";
    const variants = {
        primary:
            "text-white bg-blue-500 shadow-blue-500 hover:shadow-2xl hover:bg-violet-600",
        danger: "text-white bg-red-500 shadow-red-400 hover:shadow-2xl hover:bg-amber-300",
        outline:
            "text-white bg-blue-500 shadow-blue-500 hover:shadow-2xl hover:bg-violet-600",
    };

    const combineClass = `${baseStyle} ${variants[variant]} ${className || ""}`;

    return (
        <button {...props} className={combineClass}>
            {message}
        </button>
    );
};
