import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import DashboardClock from './DashboardClock'
import MarketsTable from './MarketsTable'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

export default class DashboardUpper extends Component {



  render(){
    const { classes } = this.props;

    return(
        <Fragment>
          <br/><br/>
          <Grid container className={styles.root} spacing={16} style={{maxHeight: 700, overflow: 'auto'}}>

            <Grid item md={3}>
                <Typography variant="overline" >
                Time
                </Typography>
              <DashboardClock />
            </Grid>

            <Grid item md={9}>
              <Typography variant="overline" >
                Markets
              </Typography>
              <MarketsTable markets={this.props.markets}/>
            </Grid>

          </Grid>
        </Fragment>
    )
  }
}
