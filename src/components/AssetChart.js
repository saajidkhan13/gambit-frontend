import React, { Component, Fragment } from 'react';

import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  LineMarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  Hint
  } from 'react-vis';

import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class AssetChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({value});
  };


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
    const {value} = this.state;

    return (
      <Fragment>
        <Paper className={classes.root} >
        <FlexibleXYPlot xType="ordinal" margin={50} width={700} height={500} >
          <XAxis/>
          <YAxis />
          <LineMarkSeries
            className="linemark-series-example"
            style={{
              strokeWidth: '1px'
            }}
            size= "1"
            onValueMouseOver={this._rememberValue}
            onValueMouseOut={this._forgetValue}
            curve={'curveMonotoneX'}
            data={this.showStockData()}
            animation={ {
              damping: 50,
              stiffness: 300
            }}
          />
          {value ? <Hint value={value} /> : null}
        </FlexibleXYPlot>
        </Paper>
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
