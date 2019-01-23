import React, {Component, Fragment} from 'react'
import PortfolioRow from './PortfolioRow'
import {connect} from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, symbol, price_when_purchased, amount, sector) {
  id += 1;
  return { name, symbol, price_when_purchased, amount, sector };
}

class PortfolioTable extends Component {


  render(){
    const data = this.props.portfolios

    const { classes } = this.props;

    console.log(data);
    return(
      <Fragment>
        <Paper className={classes.root} style={{maxHeight: 400, overflow: 'auto'}}>
          <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Price When Purchased</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Sector</TableCell>
            <TableCell align="right">Date Purchased</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? data.map(row => (
            <TableRow key={row.date_bought}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.price_when_purchased}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{(row.amount * row.price_when_purchased) }</TableCell>
              <TableCell align="right">{row.sector}</TableCell>
              <TableCell align="right">{row.date_bought}</TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </Paper>
      </Fragment>
    )
  }
}

PortfolioTable.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(PortfolioTable);
