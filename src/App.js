import React, { Component, Fragment } from 'react';
import AssetContainer from './components/AssetContainer'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Login from './components/Login'
import PortfolioContainer from './components/PortfolioContainer'
import StockIndexContainer from './components/StockIndexContainer'
import ButtonAppBar from './components/ButtonAppBar'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';



import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: { main: blueGrey[500] }, // Purple and green play nicely together.
    secondary: { main: blue[500] },
    type: 'dark',// This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },

});





class App extends Component {
  state = {
    stockToDisplay: ""
   }





  handleTicker = (event) => {
    this.setState({stockToDisplay: event.target.innerText})
  }



  render() {
    console.log(this.state.chartToDisplay);
    return (
      <Fragment>
        <MuiThemeProvider theme={theme} >
          <ButtonAppBar />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/stock" render={(routeProps) => (
                <AssetContainer {...routeProps} {...this.state} />
              )} />
              <Route exact path="/dashboard" component={Dashboard} />
              )} />
              <Route exact path="/portfolio" component={PortfolioContainer}/>
              )} />
              <Route exact path="/stocks" render={(routeProps) => (
                <StockIndexContainer {...routeProps} {...this.state} handleTicker={this.handleTicker} />
              )} />



              <Route component={NotFound} />
          </Switch>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default withRouter(App);
