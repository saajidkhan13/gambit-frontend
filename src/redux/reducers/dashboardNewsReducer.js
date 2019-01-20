const defaultState = {
  news: [],
  gainersAndLosers: {}
}

const dashboardNewsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_DASHBOARD_NEWS':
      return {...state, news: action.payload}
    case 'FETCH_GAINERS_AND_LOSERS':
      return {...state, gainersAndLosers: action.payload}
    default:
      return state
  }
}//end of reducer

export default dashboardNewsReducer
