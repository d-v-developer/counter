type Props = {
    title: string;
    callback: () => void
    disabled?: boolean;
}

export const Button = ({ title, callback, disabled }: Props) => {
    return (
        <button onClick={callback} disabled={disabled} >{title}</button>
    );
};
