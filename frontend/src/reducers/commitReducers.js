import {
    COMMIT_DETAIL_REQUEST,
    COMMIT_DETAIL_SUCCESS,
    COMMIT_DETAIL_FAIL
} from '../constants/commitConstants'


export const commitDetailReducer = (state={ commit:{ summary: {} } }, action) => {
    switch (action.type) {
        case COMMIT_DETAIL_REQUEST:
            return { loading: true, commit: { summary: {} } }
        case COMMIT_DETAIL_SUCCESS:
            return { loading: false, commit: action.payload }
        case COMMIT_DETAIL_FAIL:
            return { loading: false, commit: action.payload }
        default:
            return state
    }
}