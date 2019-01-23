export const fetchUserPortfolio = (id) => {
  return (dispatch) => {

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => {
        dispatch(fetchingPortfolio(JSONResponse.portfolios))
      })
  }
}

export const fetchingPortfolio = (portfolios) => ({ type: 'FETCH_PORTFOLIO', payload: portfolios})
