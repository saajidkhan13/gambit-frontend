import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './reducers/usersReducer'


const rootReducer = combineReducers({ usersReducer: usersReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
