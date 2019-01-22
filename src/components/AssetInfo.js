import React, {Component, Fragment} from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';




export default class AssetInfo extends Component{

  render(){

    const info = this.props.info
    const price = this.props.price.price
    return (
      <Fragment>
      <Paper>
        <Card>
          <CardContent>
            <Typography component="h1" variant="overline" gutterBottom>
              Price: {price}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Symbol: {info.symbol}
            </Typography>
            <Typography variant="overline" gutterBottom>
              CEO: {info.CEO}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Sector: {info.sector}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Industry: {info.industry}
            </Typography>
            <Typography variant="overline" gutterBottom>
              {info.description}
            </Typography>
            <Button variant="contained" onClick={this.props.handlePurchase}>Buy: ${price}</Button>
          </CardContent>
        </Card>
      </Paper>
      </Fragment>
    )
  }
}
