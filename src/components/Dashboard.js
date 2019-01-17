import React, { Component, Fragment } from 'react';
import NewsContainer from './NewsContainer'
import GainersAndLosers from './GainersAndLosers'

export default class Dashboard extends Component {


  render(){
    return (
      <Fragment>

        <GainersAndLosers data={this.props.gainersAndLosers}/>
        <NewsContainer news={this.props.news}/>

      </Fragment>
    )
  }
}
