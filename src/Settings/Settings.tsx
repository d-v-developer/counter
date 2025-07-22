import cn from './Settings.module.css'
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay.tsx";
import {Button} from "../Button/Button.tsx";

type Props = {
    maxValue: number
    startValue: number
    changeMaxValue: (newValue: number) => void
    changeStartValue: (newValue: number) => void
    applySetting: () => void
    editMode: boolean
    errorStartValue: boolean
    errorMaxValue: boolean
    errorEditMode: boolean
}

export const Settings = (
    {
        maxValue,
        startValue,
        changeMaxValue,
        changeStartValue,
        applySetting,
        editMode,
        errorStartValue,
        errorMaxValue,
        errorEditMode
    }: Props) => {

    const onClickSetHandler = () => {
        applySetting()
    }

    return (
        <div className={cn.counter}>
            <SettingsDisplay
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                errorStartValue={errorStartValue}
                errorMaxValue={errorMaxValue}
            />
            <div className={cn.buttons}>
                <Button title={'set'} callback={onClickSetHandler} disabled={!editMode || errorEditMode}/>
            </div>
        </div>
    );
};