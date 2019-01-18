import React, { Component, Fragment } from 'react';
import NewsContainer from './NewsContainer'
import GainersAndLosers from './GainersAndLosers'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


export default class Dashboard extends Component {


  render(){
    const { classes } = this.props;

    return (
      <Fragment>
        <Link to ="/profile">Practice</Link>
        <Link to = "/portfolio">Portfolio</Link>
        <div className={styles.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            </Grid>
            <Grid item xs>
            <NewsContainer />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    )
  }
}
