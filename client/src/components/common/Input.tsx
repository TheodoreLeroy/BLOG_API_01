export const Input = ({ ...props }) => {
    return (
        <>
            <input
                {...props}
                className="w-full rounded-xl border border-gray-300 p-4 text-sm 
                 placeholder:text-gray-400 focus:border-[#8B5CF6] 
                 focus:ring-[#8B5CF6] outline-none transition-all"
            />
        </>
    );
};
