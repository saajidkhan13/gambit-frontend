import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/user'
import PortfolioTable from './PortfolioTable'
import UserTable from './UserTable'
import withAuth from '../hocs/withAuth'

class PortfolioContainer extends Component {



  render(){
    const portfolios = this.props.portfolios
    return (
        <Fragment>
          <PortfolioTable portfolios={portfolios}/>
          <UserTable portfolios={portfolios}/>
        </Fragment>
    )
  }
}




export default PortfolioContainer
