import React, { Component, Fragment } from 'react';
import NewsContainer from './NewsContainer'
import GainersAndLosers from './GainersAndLosers'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUserPortfolio } from '../redux/actions/portfolio'


class Dashboard extends Component {


  render(){
    return (
      <Fragment>
        <Link to ="/profile">Practice</Link>
        <GainersAndLosers data={this.props.gainersAndLosers}/>
        <NewsContainer news={this.props.news}/>

      </Fragment>
    )
  }
}

const mapStateToProps = ({ portfoliosReducer: { fetchingPortfolio } }) => ({
  fetchingPortfolio
})

export default withRouter(connect(mapStateToProps, { fetchUserPortfolio })(Dashboard))
