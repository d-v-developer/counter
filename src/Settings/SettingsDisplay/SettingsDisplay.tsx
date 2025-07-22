import cn from './SettingsDisplay.module.css';
import {type ChangeEvent} from "react";

type Props = {
    maxValue: number
    startValue: number
    changeMaxValue: (newValue: number) => void
    changeStartValue: (newValue: number) => void
    errorStartValue: boolean
    errorMaxValue: boolean
}


export const SettingsDisplay = (
    {
        maxValue,
        startValue,
        changeMaxValue,
        changeStartValue,
        errorStartValue,
        errorMaxValue,
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
                <input
                    id={'max'}
                    type={'number'}
                    value={maxValue}
                    onChange={onChangeMaxValue}
                    className={errorMaxValue ? cn.inputError : cn.inputWithoutError}
                />
            </div>
            <div className={cn.input}>
                <label htmlFor={'start'}>start value:</label>
                <input
                    id={'start'}
                    type={'number'}
                    value={startValue}
                    onChange={onChangeStartValue}
                    className={errorStartValue ? cn.inputError : cn.inputWithoutError}
                />
            </div>
        </div>
    );
};