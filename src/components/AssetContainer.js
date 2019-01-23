import React, {Component, Fragment} from 'react';
import AssetInfo from './AssetInfo';
import AssetChart from './AssetChart';
import AssetStats from './AssetStats';
import AssetTab from './AssetTab'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withAuth from '../hocs/withAuth'




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  }
});


class AssetContainer extends Component{

  render(){
    const chart = this.props.chartToDisplay
    const info = this.props.companyInfo
    const stats = this.props.keyStats
    const price = this.props.price
    const news = this.props.news
    const { classes } = this.props;

    return (
      <Fragment>
        <br/>
        <Typography variant="overline" gutterBottom>
          {info ? info.companyName : "Loading"}
        </Typography>
        <Grid container spacing={12}>
          {chart ? <Grid item xs={6}><AssetTab chart={chart} news={news} handleTimeLine={this.props.handleTimeLine}/>
          </Grid> : <h1>no</h1>}
          {info && stats ?
            <Grid item xs={6}><AssetInfo info={info} price={price} handlePurchase={this.props.handlePurchase} handleAmount={this.props.handleAmount}/>
            <br/>
            <AssetStats stats={stats}/></Grid>
            : <h1>no</h1>}
        </Grid>
      </Fragment>
    )

}

}

AssetContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const hoc = withStyles(styles)(AssetContainer)
export default hoc;
