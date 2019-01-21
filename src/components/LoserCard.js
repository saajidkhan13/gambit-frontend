import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red }  from '@material-ui/core/colors';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  }
});

class LoserCard extends Component{









  render(){
    const { classes } = this.props;
    const losers = this.props.dashboardNewsReducer.gainersAndLosers.losers

    return (
      <div className={classes.root}>
            <GridList className={classes.gridList} cols={4.5} >
          { losers ? losers.map((loser) => {
            return <GridListTile className={classes.card}
              key={loser.symbol}
              >
              <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {loser.symbol}
                </Typography>
                <Typography className={classes.change} variant="h5" component="h2" >
                  {loser.change}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {loser.price}
                </Typography>
                <Typography component="p">
                  {loser.name}
                </Typography>
                
                </Paper>
            </GridListTile>
          }) : <h1>nothing</h1>
        }
        </GridList>
      </div>
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
