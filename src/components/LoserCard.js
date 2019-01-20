import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

};

class LoserCard extends Component{









  render(){
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const losers = this.props.dashboardNewsReducer.gainersAndLosers.losers

    return (
      <Fragment>
      <h1>LOSERS</h1>
      { losers ? losers.map((loss) => {
        return <Card className={classes.card} key={loss.symbol}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {loss.symbol}
            </Typography>
            <Typography color="secondary" variant="h5" component="h2">
              {loss.change}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {loss.price}
            </Typography>
            <Typography component="p">
              {loss.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      }) : null
    }
    </Fragment>
    )
  }
}


const mapStateToProps = ({ dashboardNewsReducer }) => ({
  dashboardNewsReducer
})

const hoc = withStyles(styles)(LoserCard)


export default connect(mapStateToProps)(hoc)
