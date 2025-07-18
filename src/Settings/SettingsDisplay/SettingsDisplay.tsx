import cn from './SettingsDisplay.module.css';

type Props = {
    maxValue: number;
    startValue: number;
}

export const SettingsDisplay = ({ maxValue, startValue }: Props) => {

    return (
        <div className={cn.settingsDisplay}>
            <div className={cn.input}>
                <label htmlFor={'max'}>max value:</label>
                <input value={maxValue} id={'max'}/>
            </div>
            <div className={cn.input}>
                <label htmlFor={'start'}>start value:</label>
                <input value={startValue} id={'start'}/>
            </div>
        </div>
    );
};