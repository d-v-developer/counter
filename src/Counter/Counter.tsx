import {Button} from "../Button/Button.tsx";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay.tsx";
import cn from './Counter.module.css'
import {useState} from "react";

type Props = {
    maxValue: number;
    startValue: number;
    editMode: boolean;
    errorEditMode: boolean;
}

export const Counter = ({ maxValue, startValue, editMode, errorEditMode }: Props) => {

    const [counter, setCounter] = useState(startValue);
    const [isError, setIsError] = useState(false);

    const onClickButtonIncHandler = () => {
        setCounter(prev => {
            const newValue = prev + 1
            if (newValue >= maxValue) setIsError(true)
            else setIsError(false)
            return newValue});
    }

    const onClickButtonResetHandler = () => {
        setCounter(startValue)
        setIsError(false);
    }

    return (
        <div className={cn['counter']}>
            <CounterDisplay value={counter} isError={isError} editMode={editMode} errorEditMode={errorEditMode}/>
            <div className={cn['buttons']}>
                <Button title={"inc"} callback={onClickButtonIncHandler} disabled={editMode ? editMode : isError}/>
                <Button title={"reset"} callback={onClickButtonResetHandler} disabled={editMode}/>
            </div>
        </div>

    );
};