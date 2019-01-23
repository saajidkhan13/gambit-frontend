import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green }  from '@material-ui/core/colors';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary,
    height: 300
  },
  container: {
    display: 'flex',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  change: {
    color: green[500]
  },
  paper: {
    height: 400,
    width: 100,
  }
});

class MarketsTable extends Component {


  render(){
    const { classes } = this.props;
    const markets = this.props.markets

    return(
        <Fragment>
          <Paper className={classes.root} style={{maxHeight: 400, overflow: 'auto'}}>
            <Table className={classes.table}>
            <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Tape A</TableCell>
              <TableCell align="right">Tape B</TableCell>
              <TableCell align="right">Tape C</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Mkt %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {markets ? markets.map(row => (
            <TableRow key={row.symbol}>
              <TableCell component="th" scope="row">{row.venueName}</TableCell>
              <TableCell align="right">{row.tapeA}</TableCell>
              <TableCell align="right">{row.tapeB}</TableCell>
              <TableCell align="right">{row.tapeC}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
              <TableCell align="right">{row.marketPercent}</TableCell>
            </TableRow>
          ))
          : null
        }
          </TableBody>
        </Table>
        </Paper>
        </Fragment>
    )
  }
}

MarketsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(MarketsTable)
