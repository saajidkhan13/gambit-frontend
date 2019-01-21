import React, { Component, Fragment } from 'react';
import AssetContainer from './components/AssetContainer'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Login from './components/Login'
import PortfolioContainer from './components/PortfolioContainer'
import StockIndexContainer from './components/StockIndexContainer'
import ButtonAppBar from './components/ButtonAppBar'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {blueGrey, blue, red }  from '@material-ui/core/colors';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const theme = createMuiTheme({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  palette: {
    primary: { main: blueGrey[800] },
    accent: red[500],
    secondary: {
      main: blue[500],
    },
  },
  typography: { useNextVariants: true },
});





class App extends Component {
  state = {
    stockToDisplay: "",
    companyInfo: {},
    timeline: "",
    chartToDisplay: [],
   }





  handleTicker = (event) => {
    this.setState({stockToDisplay: event.target.innerText})
    fetch(`http://localhost:3000/api/v1/stocks/chart/${event.target.innerText}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({chartToDisplay: data})
      })

    fetch(`http://localhost:3000/api/v1/stocks/${event.target.innerText}/company`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({companyInfo: data})
      })


  }
  handleTimeLine = (event) => {
    this.setState({timeline: event.target.innerText.toLowerCase()})
    fetch(`http://localhost:3000/api/v1/stocks/chart/${this.state.stockToDisplay}/${event.target.innerText.toLowerCase()}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({chartToDisplay: data})
      })

  }




  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme={theme} >
          <ButtonAppBar />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/stock" render={(routeProps) => (
                <AssetContainer {...routeProps} {...this.state}
                  handleTimeLine={this.handleTimeLine}
                />
              )} />
              <Route exact path="/dashboard" render={(routeProps) => (
                <Dashboard
                  {...routeProps} {...this.state}
                  handleTicker={this.handleTicker}
                  />
                )}
                />
              <Route exact path="/portfolio" component={PortfolioContainer}/>
              )} />
              <Route exact path="/stocks" render={(routeProps) => (
                <StockIndexContainer
                  {...routeProps} {...this.state}
                  handleTicker={this.handleTicker}
                  />
              )}
              />
              <Route component={NotFound} />
          </Switch>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}




export default withRouter(App);
