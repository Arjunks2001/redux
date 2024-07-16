 

 
export const SET_INPUT1='SET_INPUT1';
export const SET_INPUT2='SET_INPUT2';
export const CALCULATERESULT='CALCULATERESULT'
export const SETOPERATOR='SETOPERATOR'

export const SETACTIVEINPUT='SETACTIVEINPUT'


export const setinput1=(value)=>({
    type:SET_INPUT1,
    payload:value
});

export const setinput2=(value)=>({
    type:SET_INPUT2,
    payload:value
});

export const setOperator=(operator)=>({
    type:SETOPERATOR,
    payload:operator
});

export const calculateresult=()=>({
    type:CALCULATERESULT,
    
});

export const setActiveInput=(input)=>({
    type:SETACTIVEINPUT,
    payload:input,
    
});