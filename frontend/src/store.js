import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { repoDetailReducer, repoBranchesReducer } from './reducers/repoReducers'
import { commitDetailReducer } from './reducers/commitReducers'
import { pullRequestListReducer, pullRequestCreateReducer } from './reducers/pullRequestReducers'


const reducer = combineReducers({
    repoDetails: repoDetailReducer,
    commitDetails: commitDetailReducer,
    pullRequestList: pullRequestListReducer,
    pullRequestCreate: pullRequestCreateReducer,
    branches: repoBranchesReducer
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store