import axios from "axios"
import { FETCH_DATA_API } from "./actionType"

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
