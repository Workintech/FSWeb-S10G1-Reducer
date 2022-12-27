export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY="CLEAR_DISPLAY";
export const MEMORY_OPERATION="MEMORY_OPERATION";
export const NUMBER_UP="NUMBER_UP";
export const TOTAL="TOTAL";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}
export const memoryOperations = (mOperation) => {
    return({type:MEMORY_OPERATION, payload:mOperation})
}
export const numberUp = (number) => {
    return({type:NUMBER_UP, payload:number});
}
export const total = () => {
    return({type:TOTAL});
}
