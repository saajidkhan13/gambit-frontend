import React, {Component, Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class TickerTable extends Component {

  render(){
    const ticker = this.props.ticker
    return (
        <Fragment>
          <Paper>
            <Typography onClick={this.props.handleTicker}>
            <Link to ="/stock" >{ticker.symbol}</Link>
            </Typography>
            <Typography>
            {ticker.title}
            </Typography>
          </Paper>
        </Fragment>
    )
  }
}

export default TickerTable
