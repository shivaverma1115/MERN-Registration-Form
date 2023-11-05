import { IncCount, toggleButton } from "./actionType";



const initialState = {
    count:0,
    toggleButton:true
}

export const reducer = (state=initialState, action)=>{
    const {type, payload} = action ;
    switch(type){
        case IncCount:
            return {
                ...state, count:state.count+1
            }
        case toggleButton:
            return {
                ...state, toggleButton: !state.toggleButton
            }
        default:
            return state ;
    }
}