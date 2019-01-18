import React, { Component, Fragment } from 'react';
import AssetContainer from './components/AssetContainer'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Login from './components/Login'
import PortfolioContainer from './components/PortfolioContainer'
import ButtonAppBar from './components/ButtonAppBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



import { Route, Switch, Redirect, withRouter } from 'react-router-dom'




const API = "http://localhost:3000/api/v1/stocks/chart/nflx"



class App extends Component {
  state = {
    stock: [],
    gainersAndLosers: []
   }

  componentDidMount(){
    fetch(API, { //TODO: move this to an adapter
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({stock: data})
      })

    fetch("http://localhost:3000/api/v1/stocks/gainers-losers", { //TODO: move this to an adapter
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({gainersAndLosers: data})
      })
  }



handleChart = (array) => {
  const newArray = array.map(x => x.open > 2)
  return newArray
}



  render() {
    return (
      <Fragment>
        <MuiThemeProvider >
          <ButtonAppBar />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" render={(routeProps) => (
                <AssetContainer {...routeProps} {...this.state} />
              )} />
              <Route exact path="/dashboard" component={Dashboard} />
              )} />
              <Route exact path="/portfolio" component={PortfolioContainer}/>
              )} />

              <Route component={NotFound} />
          </Switch>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default withRouter(App);
