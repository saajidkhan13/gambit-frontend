import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';




export default class ChartPractice extends Component{

showStockData = () => {
  const stockData = []
  this.props.stock.forEach((obj, index) => {
    stockData.push({x: obj.label, y: obj.close})
  })
  return stockData
}



  render(){

    return (
      <div>
      <h1>hey</h1>
        <XYPlot width={1000} height={1000} xType="ordinal" >
          <XAxis />
          <YAxis />
          <VerticalGridLines />
          <HorizontalGridLines />
          <LineSeries data={this.showStockData()} />
        </XYPlot>
      </div>
    )
  }
}
