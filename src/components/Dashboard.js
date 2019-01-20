import React, { Component, Fragment } from 'react';
import NewsContainer from './NewsContainer'
import GainersAndLosers from './GainersAndLosers'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';




export default class Dashboard extends Component {


  render(){

    return (
      <Fragment>
        <Link to ="/profile">Practice</Link>
        <Link to = "/portfolio">Portfolio</Link>
              <GainersAndLosers />


              <NewsContainer />

      </Fragment>
    )
  }
}
