import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import GainerCard from './GainerCard'
import LoserCard from './LoserCard'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

class GainersAndLosers extends Component {




  render(){
    const { classes } = this.props;


    return(
        <Fragment>


            <GainerCard />
            <LoserCard />


        </Fragment>

    )
  }
}

const mapStateToProps = ({dashboardNewsReducer}) => ({
  dashboardNewsReducer
})

const hoc= withStyles(styles)(GainersAndLosers);

export default connect(mapStateToProps)(hoc)
