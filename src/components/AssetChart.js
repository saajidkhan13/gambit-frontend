import React, { Component, Fragment } from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  Hint,
  LineMarkSeries
  } from 'react-vis';

import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



class AssetChart extends Component{

  showStockData = () => {
    if(this.props.chart){
      const stockData = []
      this.props.chart.forEach((obj) => {
        stockData.push({x: obj.label, y: obj.close})
      })
    return stockData
    } else {
      return null
    }
  }




  render(){
    const { classes } = this.props;

    return (
      <Fragment>
        <XYPlot width={1000} height={850} xType="ordinal" >
          <XAxis />
          <YAxis />
          <LineSeries data={this.showStockData()} />
          <LineMarkSeries
            className="linemark-series-example"
            style={{
              strokeWidth: '1px'
            }}
            lineStyle={{stroke: 'black'}}
            markStyle={{stroke: 'blue'}}
            data={this.showStockData()}
          />
          {this.props.value ? <Hint value={this.props.value} /> : null}
        </XYPlot>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          1D
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          1M
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          3M
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          6M
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          1Y
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          2Y
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          5Y
        </Button>
        <Button variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          YTD
        </Button>
      </Fragment>
    )
  }

}


AssetChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssetChart);
