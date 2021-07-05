import axios from 'axios'
import {
    COMMIT_DETAIL_REQUEST,
    COMMIT_DETAIL_SUCCESS,
    COMMIT_DETAIL_FAIL
} from '../constants/commitConstants'

export const getCommitDetails = (branch, sha) => async (dispatch) => {
    try {
        dispatch({ type: COMMIT_DETAIL_REQUEST })
        const { data } = await axios.get(`/api/commits/${branch}/${sha}`)
            dispatch({
                type: COMMIT_DETAIL_SUCCESS,
                payload: data
            })
        
    } catch(error) {
        dispatch({
            type: COMMIT_DETAIL_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message
        })
    }
}