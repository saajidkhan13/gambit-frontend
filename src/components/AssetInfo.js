import React, {Component, Fragment} from 'react'
import AssetChart from './AssetChart'
import {XYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';


export default class AssetInfo extends Component{




  render(){
    return (
      <Fragment>
      <h2>Asset Information </h2>
      <AssetChart stock={this.props.stock}/>
      </Fragment>
    )
  }
}
