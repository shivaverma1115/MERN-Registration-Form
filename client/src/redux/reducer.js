import { DELETE_USER, FETCH_DATA_API } from "./actionType";

const initialState = {
    tableData: []
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_DATA_API:
            return {
                ...state, tableData: payload
            }
        case DELETE_USER:
            return state;
        default:
            return state;
    }
}