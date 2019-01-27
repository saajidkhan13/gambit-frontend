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
    const timeline = this.props.timeline
    const { classes } = this.props;

    return (
      <Fragment>
      <center>
      <br />
        {chart ? <AssetTab chart={chart} news={news} timeline={timeline}  handleTimeLine={this.props.handleTimeLine}/>
         : <h1>no</h1>}
      </center>
         <Typography variant="overline" gutterBottom>
           {info ? info.companyName : "Loading"}
         </Typography>
          {info && stats ?
            <Grid container spacing={8}>
            <Grid item xs={6}><AssetInfo info={info} price={price} handlePurchase={this.props.handlePurchase} handleAmount={this.props.handleAmount}/></Grid>

            <Grid item xs={6}><AssetStats stats={stats}/></Grid>
            </Grid>
            : <h1>no</h1>}

      </Fragment>
    )

}

}

AssetContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const hoc = withStyles(styles)(AssetContainer)
export default hoc;
