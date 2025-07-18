import cn from './Settings.module.css'
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay.tsx";
import {Button} from "../Button/Button.tsx";

export const Settings = () => {

    const onClickSetHandler = () => {
        alert('clicked');
    }

    return (
        <div className={cn.counter}>
            <SettingsDisplay maxValue={5} startValue={1}  />
            <div className={cn.buttons}>
                <Button title={'set'} callback={onClickSetHandler} />
            </div>
        </div>
    );
};