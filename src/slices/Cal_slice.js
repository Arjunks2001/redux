import { CALCULATERESULT, SET_INPUT1, SET_INPUT2, SETOPERATOR,} from "../actions/Calculator_actions";


const initialState={
    input1:0,
    input2:0,
    operator:'',
    result:0
}

const reducer=(state=initialState,action)=>{

    switch( action.type){
        case SET_INPUT1:
        return {
            ...state,
            input1:action.payload
        };
        case SET_INPUT2:
            return{
                ...state,
                input2:action.payload
            };

            case SETOPERATOR:
            return{
                ...state,
                operator:action.payload
            };


        case CALCULATERESULT:

            let result=0

            switch(state.operator){
                case "+":
                    result=state.input1 + state.input2
                    break;

                    case "-":
                        result=state.input1 - state.input2
                        break;

                        case "*":
                            result=state.input1 * state.input2
                            break;

                            case "/":
                            result=state.input1 / state.input2
                            break;
    
                default:
                    break;


            };
           
            return {
                ...state,
                result,
            };
            
            default:
                return state

    }
}


export default reducer;