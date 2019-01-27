import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';




const styles = theme => ({
  container: {
    width: 500,
    height: 1000
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  paper: {
    position: 'absolute',
    alignItems: 'center',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  menu: {
    width: 200,
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}




class SignUp extends Component{
  state = {
    name: "",
    email: "",
    password: "",
    address: "",
    funds: null,
    open: false
  };


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name] : event.target.value,
    });
  };

  handleSubmit = () =>{
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users`, {
      method: 'POST',
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(
         {
           name: this.state.name,
           email: this.state.email,
           password: this.state.password,
           address: this.state.address,
           funds: 1000
        }
      )
    })
  }

  handleRedirectClick = () => {
    this.handleSubmit()
    this.props.history.push('/login')
  }



  render(){
    const { classes } = this.props;
    console.log(this.state);
    return(
      <Fragment>
        <br/>
        <Paper>
          <Card>
            <CardContent>
            <center>
            <Avatar className={classes.avatar} >
              <LockOutlinedIcon />
            </Avatar>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Username"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="standard-uncontrolled"
                  label="Email"
                  className={classes.textField}
                  onChange={this.handleChange('email')}
                  margin="normal"
                />
                <TextField
                  id="standard-required"
                  label="Password"
                  className={classes.textField}
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
                <TextField
                  id="address"
                  label="Address"
                  className={classes.textField}
                  onChange={this.handleChange('address')}
                  margin="normal"
                />
                <br/><br/>
                <Button color="secondary" variant="contained"  onClick={this.handleOpen}>
                  Sign Up
                </Button>


                <Modal open={this.state.open} onClose={this.handleClose}>
                  <div style={getModalStyle()} className={classes.paper}>
                  <Paper>
                    <Card>
                      <CardContent>
                        <center>
                        <Typography variant="overline">Thank You For Signing Up</Typography>

                        <Button color="secondary" variant="contained" onClick={this.handleRedirectClick}>Back to Login Page</Button>
                        </center>
                      </CardContent>
                    </Card>
                  </Paper>
                  </div>
                </Modal>
              </form>
              </center>
            </CardContent>
          </Card>
        </Paper>
      </Fragment>
    )
  }
}



SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
