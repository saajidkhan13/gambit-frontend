import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import withAuth from './hocs/withAuth'
import {fetchCurrentUser} from './redux/actions/user'

import AssetContainer from './components/AssetContainer'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PortfolioContainer from './components/PortfolioContainer'
import StockIndexContainer from './components/StockIndexContainer'
import ButtonAppBar from './components/ButtonAppBar'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {blueGrey, cyan, red }  from '@material-ui/core/colors';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const theme = createMuiTheme({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  palette: {
    primary: { main: blueGrey[800] },
    accent: red[500],
    secondary: {
      main: cyan[700],
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
    price: {},
    keyStats: {},
    amount: 0,
    user_id: null,
    news: [],
    portfolios: [],
    markets: []
  }

  componentDidMount(){
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(r => r.json())
    .then(data => {
      this.setState({user_id: data.user.id});
      return data.user.id
    })
    .then( id => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(r => r.json())
      .then(data => {
        this.setState({portfolios: data.portfolios})
      })
    }
    )

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/markets`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(r => r.json())
    .then(data => {
      this.setState({markets: data});
    })
  }


  handleTicker = (event) => {
    event.preventDefault()
    this.setState({stockToDisplay: event.target.innerText})
    this.setState({user_id: this.props.usersReducer.user.id })
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

    fetch(`http://localhost:3000/api/v1/stocks/price/${event.target.innerText}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({price: data})
      })

      fetch(`http://localhost:3000/api/v1/stocks/${event.target.innerText}/stats`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
        .then(r => r.json())
        .then(data => {
          this.setState({keyStats: data})
        })

        fetch(`http://localhost:3000/api/v1/stocks/${event.target.innerText}/news`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
          }
        })
          .then(r => r.json())
          .then(data => {
            this.setState({news: data})
          })
  }

  handleTimeLine = (event) => {
    event.preventDefault()
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

  handlePurchase = () =>{
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/portfolios`, {
            method: 'POST',
            headers:
            {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(

               {
                 user_id: this.state.user_id,
                 name: this.state.companyInfo.companyName,
                 symbol: this.state.stockToDisplay,
                 price_when_purchased: this.state.price.price,
                 amount: this.state.amount,
                 sector: this.state.companyInfo.sector ,
                 date_bought: Date()
              }
            )
          })
    .then(r => r.json())
    .then(data => {
      const newArray = [...this.state.portfolios]
      newArray.push(data)
      this.setState({portfolios: newArray})
    })
  }


  handleAmount = (event) => {
    event.preventDefault()
    this.setState({amount: parseInt(event.target.value)})
  }




  render() {
      return (
        <Fragment>
          <MuiThemeProvider theme={theme} >
            <ButtonAppBar />
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/stock" render={(routeProps) => (
                  <AssetContainer {...routeProps} {...this.state}
                    handleTimeLine={this.handleTimeLine}
                    handlePurchase={this.handlePurchase}
                    handleAmount={this.handleAmount}
                  />
                )} />
                <Route exact path="/dashboard" render={(routeProps) => (
                  <Dashboard
                    {...routeProps} {...this.state}
                    handleTicker={this.handleTicker}
                    />
                  )}
                  />
                <Route exact path="/portfolio" render={(routeProps) => (
                  <PortfolioContainer
                    {...routeProps} {...this.state}
                    />
                  )}
                  />
                <Route exact path="/stocks" render={(routeProps) => (
                  <StockIndexContainer
                    {...routeProps} {...this.state}
                    handleTicker={this.handleTicker}
                    />
                )}
                />
                {/* <Route component={NotFound} /> */}
            </Switch>
          </MuiThemeProvider>
        </Fragment>
      )
    }
}


const mapStateToProps = ({usersReducer, portfoliosReducer}) => ({
  usersReducer,
  portfoliosReducer
})

export default withRouter(connect(mapStateToProps)(App))
