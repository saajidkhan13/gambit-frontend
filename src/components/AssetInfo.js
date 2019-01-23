import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom'


import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';





function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  }
});




class AssetInfo extends Component{
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleRedirectClick = () => {
    this.props.handlePurchase()
    this.props.history.push('/portfolio')
  }

  render(){

    const info = this.props.info
    const price = this.props.price.price
    const { classes } = this.props;

    return (
      <Fragment>
      <Paper>
        <Card>
          <CardContent>
            <Typography component="h1" variant="overline" gutterBottom>
              Price: {price}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Symbol: {info.symbol}
            </Typography>
            <Typography variant="overline" gutterBottom>
              CEO: {info.CEO}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Sector: {info.sector}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Industry: {info.industry}
            </Typography>
            <Typography variant="overline" gutterBottom>
              {info.description}
            </Typography>
            <div>
            <Button variant="contained" onClick={this.handleOpen}>Buy: ${price}</Button>
            <Modal open={this.state.open} onClose={this.handleClose}>
              <div style={getModalStyle()} className={classes.paper}>
              <Paper>
                <Card>
                  <CardContent>
                    <center>
                    <Typography variant="overline">Please indicate how many shares</Typography>
                    <Input onChange={this.props.handleAmount} placeholder="Amount of Shares" className={classes.input} />
                    <br/>
                    <Button variant="contained" onClick={this.handleRedirectClick}>Buy</Button>
                    </center>
                  </CardContent>
                </Card>
              </Paper>
              </div>
            </Modal>
            </div>
          </CardContent>
        </Card>
      </Paper>
      </Fragment>
    )
  }
}


const AssetInfoWrapped = withStyles(styles)(AssetInfo);

export default withRouter(AssetInfoWrapped);
