import cn from './CounterDisplay.module.css'

type Props = {
    value: number;
    isError: boolean;
}

export const CounterDisplay = ({ value, isError }: Props) => {
    return (
        <div className={cn.counterDisplay}>
            <span className={!isError ? cn.span : cn.spanLimit}>{value}</span>
        </div>
    );
};