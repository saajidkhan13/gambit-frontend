import { LOAD_TICKER, LOAD_DETAILS} from './types'


const initialState = {
  ticker: {},
  details: []
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case LOAD_TICKER:
      return {...state, ticker: action.payload}
    case LOAD_DETAILS:
      return {...state, details: action.payload}
    default:
      return state
  }
}
