import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './reducers/usersReducer'
import portfoliosReducer from './reducers/portfoliosReducer'

const rootReducer = combineReducers({ usersReducer: usersReducer, portfoliosReducer: portfoliosReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
