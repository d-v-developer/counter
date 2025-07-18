import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";

export function App() {

    return (
        <div className={'main'}>
            <Settings />
            <Counter maxValue={5} startValue={2}/>
        </div>
    )
}
