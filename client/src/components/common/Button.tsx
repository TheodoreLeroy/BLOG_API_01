import type { JSX } from "react";

export const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="w-full rounded-xl bg-black p-4 font-semibold text-white 
                 transition hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
        >
            {children}
        </button>
    );
};
