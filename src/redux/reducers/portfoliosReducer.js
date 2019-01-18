const defaultState = {
  portfolios: []
}

const portfoliosReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_PORTFOLIO':
      return {...state, portfolios: action.payload}
    default:
      return state
  }
}//end of reducer

export default portfoliosReducer
