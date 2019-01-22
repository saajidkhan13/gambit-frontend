import React, {Component, Fragment} from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



export default class AssetStats extends Component {



  render(){
    const stats = this.props.stats

    return(
      <Fragment>
        <Paper>
          <Card>
            <CardContent>
            <Typography variant="overline" gutterBottom>
              Market Cap: {stats.marketcap}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Float: {stats.float}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Float: {stats.float}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Shares Outstanding: {stats.sharesOutstanding}
            </Typography>
            <Typography variant="overline" gutterBottom>
              52 Week-High: {stats.week52high}
            </Typography>
            <Typography variant="overline" gutterBottom>
              52 Week-Low: {stats.week52low}
            </Typography>
            <Typography variant="overline" gutterBottom>
              52 Week-Change: {stats.week52change}
            </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Fragment>
    )
  }
}
