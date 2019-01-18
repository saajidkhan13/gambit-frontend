import React, { Component, Fragment } from 'react'

import GainerCard from './GainerCard'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';




export default class GainersAndLosers extends Component {





  render(){
    const gainers = this.props.data.gainers
    const losers = this.props.data.losers
    return(
        <Fragment>
          <h1>GAINZ</h1>
          {gainers ? gainers.map(obj => {
            return <GainerCard key={obj.symbol} gainer={obj} />
          }) : null}
        </Fragment>

    )
  }
}
