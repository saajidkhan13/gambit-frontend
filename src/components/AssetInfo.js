import React, {Component, Fragment} from 'react';
import AssetChart from './AssetChart';
import {XYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export default class AssetInfo extends Component{

  render(){

    const info = this.props.info

    return (
      <Fragment>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Symbol: {info.symbol}
            </Typography>
            <Typography variant="h6" gutterBottom>
              CEO: {info.CEO}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {info.description}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Sector: {info.sector}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Website: {info.wesbite}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Industry: {info.industry}
            </Typography>
          </CardContent>
        </Card>
      </Fragment>
    )
  }
}
