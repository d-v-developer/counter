import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";
import {useState} from "react";

export function App() {

    const [maxValue, setMaxValue] = useState(7);
    const [startValue, setStartValue] = useState(2);
    const [editMode, setEditMode] = useState(false);

    const errorStartValue = startValue < 0 || startValue >= maxValue;
    const errorMaxValue = maxValue < 0 || maxValue <= startValue;
    const errorEditMode = errorStartValue || errorMaxValue;

    const changeMaxValue = (newValue: number) => {
        setMaxValue(newValue);
        if (!editMode) setEditMode(true);
    }

    const changeStartValue = (newValue: number) => {
        setStartValue(newValue)

        if (!editMode) setEditMode(true);
    }

    const applySetting = () => {
        //1. поместить в LocalStorage
        //2. Выйти из EditMode
        setEditMode(false);
    }

    return (
        <div className={'main'}>
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                applySetting={applySetting}
                editMode={editMode}
                errorStartValue={errorStartValue}
                errorMaxValue={errorMaxValue}
                errorEditMode={errorEditMode}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                editMode={editMode}
                errorEditMode={errorEditMode}/>
        </div>
    )
}
