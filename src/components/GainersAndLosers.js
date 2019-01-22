import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import GainerCard from './GainerCard'
import LoserCard from './LoserCard'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class GainersAndLosers extends Component {

  render(){
    return(
        <Fragment>
        <br/><br/>
          <Grid container spacing={6}>
              <Grid item xs={6}>
              <Typography variant="overline" >
              Gainers
              </Typography>
              </Grid >
              <GainerCard handleTicker={this.props.handleTicker}/>
            </Grid>
          <br/><br/><br/>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Typography variant="overline" >
                Losers
              </Typography>
            </Grid >
              <LoserCard handleTicker={this.props.handleTicker}/>
          </Grid>
        </Fragment>
    )
  }
}
