import axios from "axios"
import { DELETE_USER, FETCH_DATA_API } from "./actionType"

export const fetchdatathroughapi = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_URL_LINK}/data`)
            .then((res) => {
                dispatch({
                    type: FETCH_DATA_API,
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    }
}

export const deleteUserFromTable = (id) => {
    return (dispatch, getState) => {
        try {
            axios.delete(`${process.env.REACT_APP_URL_LINK}/data/${id}`)
                .then((res) => {
                    dispatch({
                        type: DELETE_USER,
                    })
                    console.log(res.data) ;
                })
        }
        catch (error) {
            console.error('Error deleting data:', error);
        }
    }
}
