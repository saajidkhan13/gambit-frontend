import React, { Component, Fragment } from 'react';

import DashboardUpper from './DashboardUpper'
import GainersAndLosers from './GainersAndLosers'


class Dashboard extends Component {

  render(){
    const markets = this.props.markets
    return (
      <Fragment>
              <DashboardUpper markets={markets}/>
              <GainersAndLosers handleTicker={this.props.handleTicker}/>
      </Fragment>
    )
  }
}

export default Dashboard
