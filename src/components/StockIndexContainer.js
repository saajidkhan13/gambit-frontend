import React, { Component, Fragment } from 'react'

import {connect} from 'react-redux'

import TickerTable from './TickerTable'

import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class StockIndexContainer extends Component {
  state = {
    term: ""
  }

  handleChange = (event) => {
    this.setState({term: event.target.value})
  }

  filteredStocks = () => {
    const mappedStocks = this.props.stocksReducer.stocks
    const newStocks = mappedStocks.filter(stock => {
      return stock.title.toLowerCase().includes(this.state.term.toLowerCase())
    })
    return newStocks.slice(0, 10)
  }


  render(){
    const stocks = this.props.stocksReducer.stocks;
    const { classes } = this.props;
    return (
      <Fragment>
      <Typography component="h2" variant="h1" gutterBottom>
        Search Stocks
      </Typography>

      {stocks ?
        <div>
          <input type="text"
            placeholder="Search Stocks"
            onChange={this.handleChange}
          />
            <div>
            {this.filteredStocks().map(ticker => {
              return <TickerTable handleTicker={this.props.handleTicker} key={ticker.symbol} ticker={ticker} />
            })}
            </div>
       </div>  :
       <div className={classes.root}>
        <LinearProgress variant="query" />
        <br />
        <LinearProgress color="secondary" variant="query" />
      </div>
      }
      </Fragment>
    )
  }
}

StockIndexContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({stocksReducer}) => ({
  stocksReducer
})

const hoc = withStyles(styles)(StockIndexContainer);



export default connect(mapStateToProps)(hoc)
