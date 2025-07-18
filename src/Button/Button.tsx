type Props = {
    title: string;
    callback: () => void
    isError?: boolean;
}

export const Button = ({ title, callback, isError }: Props) => {
    return (
        <button onClick={callback} disabled={isError} >{title}</button>
    );
};
