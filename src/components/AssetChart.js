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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';




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

  displayTimeline = (str) => {
    if(str == "6m"){
      return "Six Months"
    } else if(str == "3m"){
      return "Three Months"
    } else if(str == "1m"){
      return "One Month"
    } else if(str == "1d"){
      return "One Day"
    } else if(str == "1y"){
      return "One Year"
    } else if(str == "2y"){
      return "Two Years"
    } else if(str == "5y"){
      return "Five Years"
    } else if(str == "ytd"){
      return "YTD"
    } else {
      return "One Month"
    }
  }




  render(){
    const { classes } = this.props;
    const {value} = this.state;
    const timeline = this.props.timeline
    return (
      <Fragment>

        <Grow
           in={true}
           timeout={1500}
         >
        <Paper>
        <center>
        <Typography variant="overline">
        Timeline: {this.displayTimeline(timeline)}
        </Typography>
        </center>


        <FlexibleXYPlot xType="ordinal" margin={70} width={1400} height={300} >
          <XAxis hideTicks/>
          <YAxis />

          <HorizontalGridLines />
          <LineMarkSeries
            className="linemark-series-example"
            style={{
              strokeWidth: '1px'
            }}
            size= "3"
            onValueMouseOver={this._rememberValue}
            onValueMouseOut={this._forgetValue}
            lineStyle={{stroke: '#0097a7'}}
            markStyle={{stroke: 'black'}}
            data={this.showStockData()}
            animation={ {
              damping: 50,
              stiffness: 300
            }}
          />
          {value ? <Hint value={value} /> : null}
        </FlexibleXYPlot>

        </Paper>
        </Grow>

        <center>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          1D
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          1M
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          3M
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          6M
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          1Y
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          2Y
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          5Y
        </Button>
        <Button color="secondary" variant="contained" className={classes.button} onClick={this.props.handleTimeLine}>
          YTD
        </Button>
        </center>

      </Fragment>
    )
  }

}


AssetChart.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AssetChart);
