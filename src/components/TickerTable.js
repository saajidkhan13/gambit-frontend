import React, {Component, Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';


class TickerTable extends Component {

  render(){
    const ticker = this.props.ticker
    return (
        <Fragment>
        <Grow
           in={true}
           timeout={3500}
         >
          <Paper>
            <Typography onClick={this.props.handleTicker}>
            <Link to ="/stock" >{ticker.symbol}</Link>
            </Typography>
            <Typography variant="overline">
            {ticker.title}
            </Typography>
          </Paper>
        </Grow>
        </Fragment>
    )
  }
}

export default TickerTable
