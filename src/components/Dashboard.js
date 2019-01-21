import React, { Component, Fragment } from 'react';

import NewsContainer from './NewsContainer'
import GainersAndLosers from './GainersAndLosers'

import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default class Dashboard extends Component {

  render(){
    return (
      <Fragment>
              <GainersAndLosers handleTicker={this.props.handleTicker}/>
              <NewsContainer />
      </Fragment>
    )
  }
}
