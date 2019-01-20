export const fetchStocks = (id) => {
  return (dispatch) => {

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stocks/tickers`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => {
        console.log(JSONResponse)
        dispatch(fetchingStocks(JSONResponse))
      })
  }
}

export const fetchingStocks = (stocks) => ({ type: 'FETCH_STOCKS', payload: stocks})
