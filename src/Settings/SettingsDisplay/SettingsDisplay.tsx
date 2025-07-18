import cn from './SettingsDisplay.module.css';
import {type ChangeEvent} from "react";

type Props = {
    maxValue: number
    startValue: number
    changeMaxValue: (newValue: number) => void
    changeStartValue: (newValue: number) => void
}

export const SettingsDisplay = (
    {
        maxValue,
        startValue,
        changeMaxValue,
        changeStartValue
    }: Props) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(Number(e.currentTarget.value));
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeStartValue(Number(e.currentTarget.value));
    }

    return (
        <div className={cn.settingsDisplay}>
            <div className={cn.input}>
                <label htmlFor={'max'}>max value:</label>
                <input type={'number'} value={maxValue} onChange={onChangeMaxValue} id={'max'}/>
            </div>
            <div className={cn.input}>
                <label htmlFor={'start'}>start value:</label>
                <input type={'number'} value={startValue} onChange={onChangeStartValue} id={'start'}/>
            </div>
        </div>
    );
};