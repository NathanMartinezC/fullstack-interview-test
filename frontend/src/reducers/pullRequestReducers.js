import {
    PULL_REQUEST_LIST_REQUEST,
    PULL_REQUEST_LIST_SUCCESS,
    PULL_REQUEST_LIST_FAIL,

    PULL_REQUEST_CREATE_REQUEST,
    PULL_REQUEST_CREATE_SUCCESS,
    PULL_REQUEST_CREATE_FAIL,
    PULL_REQUEST_CREATE_RESET
} from '../constants/pullRequestConstants'

export const pullRequestListReducer = (state={ pull_requests: [] }, action) => {
    switch (action.type) {
        case PULL_REQUEST_LIST_REQUEST:
            return { loading: true, pull_requests: [] }
        case PULL_REQUEST_LIST_SUCCESS:
            return { loading: false, pull_requests: action.payload }
        case PULL_REQUEST_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const pullRequestCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PULL_REQUEST_CREATE_REQUEST:
            return {
                loading: true
            }
        case PULL_REQUEST_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case PULL_REQUEST_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case PULL_REQUEST_CREATE_RESET:
            return {}
        default:
            return state
    }
}