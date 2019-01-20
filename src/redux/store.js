import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './reducers/usersReducer'
import portfoliosReducer from './reducers/portfoliosReducer'
import dashboardNewsReducer from './reducers/dashboardNewsReducer'
import stocksReducer from './reducers/stocksReducer'

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  portfoliosReducer: portfoliosReducer,
  dashboardNewsReducer: dashboardNewsReducer,
  stocksReducer: stocksReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
