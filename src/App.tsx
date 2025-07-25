import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";
import {useEffect, useState} from "react";

export function App() {

    const [maxValue, setMaxValue] = useState(1);
    const [startValue, setStartValue] = useState(0);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const startValue = localStorage.getItem('INITIAL_START_VALUE')
        if (startValue) {
            setStartValue(parseInt(startValue));
        }
        const maxValue = localStorage.getItem('INITIAL_MAX_VALUE')
        if (maxValue) {
            setMaxValue(parseInt(maxValue));
        }
    }, []);

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
        localStorage.setItem('INITIAL_START_VALUE', JSON.stringify(startValue))
        localStorage.setItem('INITIAL_MAX_VALUE', JSON.stringify(maxValue))
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
                errorEditMode={errorEditMode}
            />
        </div>
    )
}
