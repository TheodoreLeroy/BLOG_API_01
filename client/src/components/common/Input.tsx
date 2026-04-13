interface Props {
    type?: string;
    label?: string;
    message?: string;
}

export const Input = ({ type, label, message }: Props) => {
    return (
        <>
            <label className="my-3">{label}</label>
            <div className="border-1 border-gray-400 rounded-[0.7rem] py-[0.4rem]">
                <input type={type} placeholder={message} className="px-3" />
            </div>
        </>
    );
};
