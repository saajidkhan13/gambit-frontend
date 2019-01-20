const defaultState = {
  stocks: []
}

const stocksReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_STOCKS':
      return {...state, stocks: action.payload}
    default:
      return state
  }
}//end of reducer

export default stocksReducer
