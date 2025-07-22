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
}

export const Settings = (
    {
        maxValue,
        startValue,
        changeMaxValue,
        changeStartValue,
        applySetting,
        editMode,
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
            />
            <div className={cn.buttons}>
                <Button title={'set'} callback={onClickSetHandler} disabled={!editMode}/>
            </div>
        </div>
    );
};