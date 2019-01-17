import { fetchUserPortfolio } from './portfolio'

export const loginUser = (name, password) => {
  return (dispatch) => { //thunk
    console.log(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`);
    console.log(`debugging`, name, password);
    dispatch({ type: 'AUTHENTICATING_USER' })
    fetch(`http://localhost:3000/api/v1/login`, { //TODO: move this to an adapter
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: name,
          password: password
        }
      })
    })
      .then(response => {

        if (response.ok) {
          return response.json()
        } else {
          console.log('cannot login');
          throw response
        }
      })

      .then(JSONResponse => {
        console.log(JSONResponse)
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
        dispatch(fetchUserPortfolio(JSONResponse.user.id))
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch(authenticatingUser()) //tells the app we are fetching
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
