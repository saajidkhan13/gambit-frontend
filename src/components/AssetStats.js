import React, {Component, Fragment} from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';





export default class AssetStats extends Component {



  render(){
    const stats = this.props.stats
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return(
      <Fragment>
      <Grow
         in={true}
         timeout={3500}
       >
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
      </Grow>
      </Fragment>
    )
  }
}
