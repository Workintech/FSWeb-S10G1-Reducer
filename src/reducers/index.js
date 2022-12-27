import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION,CLEAR_DISPLAY,MEMORY_OPERATION, NUMBER_UP, TOTAL } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0,
    kontrol:false,
    x:0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}
const memoryOperations = (operation,state) => {
    switch(operation){
        case("M+"):
            return ({...state,memory:state["total"]})
        case("MR"):
            return ({...state,total:state["memory"]})
        case("MC"):
            return ({...state,memory:0})
        
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload,
                kontrol:true
            });
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total:0,
                x:0,
                kontrol:false
            });
        case(MEMORY_OPERATION):
            return (memoryOperations(action.payload,state));

        case(NUMBER_UP):
            return( 
                (state.kontrol===false)
                ? 
                (
                    {
                        ...state,
                        total: state.total === 0 ? action.payload : 10*state.total + action.payload
                    }
                )
                :
                (
                    {
                        ...state,
                        x: state.x === 0 ? action.payload : 10*state.x + action.payload
                    }
                )
                )
        case(TOTAL):
                return ({...state,
                    total:calculateResult(state.total, state.x, state.operation),
                    x:0,
                    kontrol:false
                })
            
        default:
            return state;
    }
}

export default reducer;