import React, { Component, Fragment } from 'react'

import withAuth from '../hocs/withAuth'


import {connect} from 'react-redux'

import TickerTable from './TickerTable'
import Loader from '../hocs/Loader'

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

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
      <br />
      <Typography component="h2" variant="overline" gutterBottom>
        Search Stocks
      </Typography>


      {stocks ?
          <Grid container className={styles.root} spacing={16} style={{maxHeight: 700, overflow: 'auto'}}>
          <Grid item md={3}>
          <TextField
            id="filled-full-width"
            onChange={this.handleChange}
            style={{ margin: 8 }}
            placeholder="Amazon, Disney, Netflix etc."
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>
        <Grid item md={9}>
            {this.filteredStocks().map(ticker => {
              return <TickerTable handleTicker={this.props.handleTicker} key={ticker.symbol} ticker={ticker} />
            })}
        </Grid>
        </Grid>  :
       <Loader/>
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
