type Props = {
    message: string;
    visible?: boolean;
};

export default function AlertMessage({ message, visible = false }: Props) {
    return (
        <div
            className={`flex flex-row items-center py-1 px-3 rounded-lg shadow-lg body-primary text-sm transition-opacity ${visible ? "opacity-100" : "opacity-0"
                }`}
        >
            {message}
        </div>
    );
}
