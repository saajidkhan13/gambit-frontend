import React, {Component} from 'react'
import {XYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';


export default class AssetChart extends Component{

  showStockData = () => {
    const stockData = []
    this.props.stock.forEach((obj, index) => {
      stockData.push({x: obj.label, y: obj.close})
    })
    return stockData
  }


  render(){
    return (
      <XYPlot width={850} height={800} xType="ordinal" >
        <XAxis />
        <YAxis />
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineSeries data={this.showStockData()} />
      </XYPlot>
    )
  }
}
