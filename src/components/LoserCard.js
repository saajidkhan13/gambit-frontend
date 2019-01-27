import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red }  from '@material-ui/core/colors';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Grow from '@material-ui/core/Grow';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
    color: red[500]
  },
  paper: {
    height: 400,
    width: 100,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  }
});

class LoserCard extends Component{









  render(){
    const { classes } = this.props;
    const losers = this.props.dashboardNewsReducer.gainersAndLosers.losers

    return(
        <Fragment>

        <Grow
           in={true}
           timeout={3000}
         >

          <Paper className={classes.root} style={{maxHeight: 400, overflow: 'auto'}}>
            <Table className={classes.table}>
            <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {losers ? losers.map(row => (
            <TableRow key={row.symbol}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right" onClick={this.props.handleTicker}><Link to ="/stock" >{row.symbol}</Link></TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))
          : null
        }
          </TableBody>
        </Table>
        </Paper>

        </Grow>

        </Fragment>
    )
  }
}


LoserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



const mapStateToProps = ({ dashboardNewsReducer }) => ({
  dashboardNewsReducer
})

const hoc = withStyles(styles)(LoserCard)


export default connect(mapStateToProps)(hoc)
