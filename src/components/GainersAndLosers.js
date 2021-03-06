import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import GainerCard from './GainerCard'
import LoserCard from './LoserCard'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

export default class GainersAndLosers extends Component {



  render(){
    const { classes } = this.props;

    return(
        <Fragment>
          <br/><br/>
          <Grid container className={styles.root} spacing={16} style={{maxHeight: 700, overflow: 'auto'}}>

            <Grid item md={6}>
                <Typography variant="overline" >
                Gainers
                </Typography>
              <GainerCard handleTicker={this.props.handleTicker}/>
            </Grid>

            <Grid item md={6}>
            <Typography variant="overline" >
              Losers
            </Typography>
            <LoserCard handleTicker={this.props.handleTicker}/>
            </Grid>

          </Grid>
        </Fragment>
    )
  }
}
