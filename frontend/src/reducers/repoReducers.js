import {
    REPO_DETAIL_REQUEST,
    REPO_DETAIL_SUCCESS,
    REPO_DETAIL_FAIL,

    REPO_BRANCHES_REQUEST,
    REPO_BRANCHES_SUCCESS,
    REPO_BRANCHES_FAIL
} from '../constants/repoConstants'

export const repoDetailReducer = (state={ repo:{ commits:[], branches: [] } }, action) => {
    switch (action.type) {
        case REPO_DETAIL_REQUEST:
            return { loading: true, repo: { commits:[], branches: [] } }
        case REPO_DETAIL_SUCCESS:
            return { loading: false, repo: action.payload }
        case REPO_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const repoBranchesReducer = (state={ branches: [] }, action) => {
    switch (action.type) {
        case REPO_BRANCHES_REQUEST:
            return { loading: true, branches: [] }
        case REPO_BRANCHES_SUCCESS:
            return { loading: false, branches: action.payload }
        case REPO_BRANCHES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}