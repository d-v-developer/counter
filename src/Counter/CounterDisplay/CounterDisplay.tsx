import cn from './CounterDisplay.module.css'

type Props = {
    value: number
    isError: boolean
    editMode: boolean
    errorEditMode: boolean
}

const INFO_EDIT = "enter values and press 'set'"
const ERROR_EDIT = "incorrect value"

export const CounterDisplay = ({ value, isError, editMode, errorEditMode }: Props) => {
    return (
        <div className={cn.counterDisplay}>
            {editMode && <span className={errorEditMode ? cn.spanEditError : cn.spanEdit}>{errorEditMode? ERROR_EDIT : INFO_EDIT}</span>}
            {!editMode && <span className={!isError ? cn.span : cn.spanLimit}>{value}</span>}
        </div>
    );
};