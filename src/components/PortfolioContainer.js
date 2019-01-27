import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/user'
import PortfolioTable from './PortfolioTable'
import UserTable from './UserTable'
import withAuth from '../hocs/withAuth'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});


class PortfolioContainer extends Component {



  render(){
    const portfolios = this.props.portfolios
    return (
        <Fragment>
        <br/><br/>
          <Typography variant="overline">Your Portfolio</Typography>
          <Grid container className={styles.root} spacing={16} style={{maxHeight: 700, overflow: 'auto'}}>

          <Grid item md={6}>
          <PortfolioTable portfolios={portfolios}/>
          </Grid>

          <Grid item md={6}>
          <UserTable portfolios={portfolios}/>
          </Grid>

          </Grid>
        </Fragment>
    )
  }
}




export default PortfolioContainer
