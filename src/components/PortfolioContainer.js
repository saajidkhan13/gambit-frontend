import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/user'
import PortfolioTable from './PortfolioTable'

class PortfolioContainer extends Component {



  render(){
    return (
        <PortfolioTable />
    )
  }
}


const mapStateToProps = ({portfoliosReducer}) => ({
  portfoliosReducer
})

export default connect(mapStateToProps)(PortfolioContainer)
