interface Props {
    label?: string;
    type?: string;
    message?: string;
}

export const Input = ({ label, type, message }: Props) => {
    return (
        <>
            <label>{label}</label>
            <input
                type={type}
                placeholder={message}
                className="w-auto border-gray-400 border-[0.1rem] py-2 rounded-2xl"
            ></input>
        </>
    );
};
