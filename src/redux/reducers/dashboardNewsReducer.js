
const defaultState = {
  news: []
}

const dashboardNewsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_DASHBOARD_NEWS':
      return {...state, news: action.payload}
    default:
      return state
  }
}//end of reducer

export default dashboardNewsReducer
