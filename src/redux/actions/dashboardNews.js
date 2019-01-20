export const fetchDashboardNews = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stocks/dis/news`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => {
        console.log(JSONResponse)
        dispatch(fetchingDashboardNews(JSONResponse))
      })
  }
}

export const fetchingDashboardNews = (news) => ({type: 'FETCH_DASHBOARD_NEWS', payload: news})

export const fetchGainersAndLosers = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stocks/gainers-losers`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => {
        console.log(JSONResponse)
        dispatch(fetchingGainersAndLosers(JSONResponse))
      })
  }
}

export const fetchingGainersAndLosers = (obj) => ({type: 'FETCH_GAINERS_AND_LOSERS', payload: obj})
