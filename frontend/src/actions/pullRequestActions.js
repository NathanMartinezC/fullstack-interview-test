import axios from 'axios'
import {
    PULL_REQUEST_LIST_REQUEST,
    PULL_REQUEST_LIST_SUCCESS,
    PULL_REQUEST_LIST_FAIL,

    PULL_REQUEST_CREATE_REQUEST,
    PULL_REQUEST_CREATE_SUCCESS,
    PULL_REQUEST_CREATE_FAIL,

} from '../constants/pullRequestConstants'

export const getPullRequestList = () => async (dispatch) => {
    try {
        dispatch({ type: PULL_REQUEST_LIST_REQUEST })
        const { data } = await axios.get(`/api/pull_requests/`)
            dispatch({
                type: PULL_REQUEST_LIST_SUCCESS,
                payload: data
            })
        
    } catch(error) {
        dispatch({
            type: PULL_REQUEST_LIST_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message
        })
    }
}


export const savePullRequest = (pull_request) => async (dispatch) => {
    try{
        dispatch({
            type: PULL_REQUEST_CREATE_REQUEST
        })
        const { data } = await axios.post(
            '/api/pull_requests/',
            pull_request
        )
        dispatch({
            type: PULL_REQUEST_CREATE_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PULL_REQUEST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}