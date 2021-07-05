import axios from 'axios'
import {
    REPO_DETAIL_REQUEST,
    REPO_DETAIL_SUCCESS,
    REPO_DETAIL_FAIL,

    REPO_BRANCHES_REQUEST,
    REPO_BRANCHES_SUCCESS,
    REPO_BRANCHES_FAIL
} from '../constants/repoConstants'

export const getRepoDetails = (branch) => async (dispatch) => {
    try {
        dispatch({ type: REPO_DETAIL_REQUEST })
        const { data } = await axios.get(`/api/repo/commits/${branch}`)
            dispatch({
                type: REPO_DETAIL_SUCCESS,
                payload: data
            })
        
    } catch(error) {
        dispatch({
            type: REPO_DETAIL_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message
        })
    }
}


export const getRepoBranches = () => async (dispatch) => {
    try {
        dispatch({ type: REPO_BRANCHES_REQUEST })
        const { data } = await axios.get(`/api/repo/branches`)
            dispatch({
                type: REPO_BRANCHES_SUCCESS,
                payload: data
            })
        
    } catch(error) {
        dispatch({
            type: REPO_BRANCHES_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail
                : error.message
        })
    }
}