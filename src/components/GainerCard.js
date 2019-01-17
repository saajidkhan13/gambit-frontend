import React, {Component, Fragment} from 'react'

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


class GainerCard extends Component {


  render(){
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const gainer = this.props.gainer
    return(
      <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {gainer.symbol}
        </Typography>
        <Typography color="secondary" variant="h5" component="h2">
          {gainer.change}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {gainer.price}
        </Typography>
        <Typography component="p">
          {gainer.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
  }
}

GainerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GainerCard);