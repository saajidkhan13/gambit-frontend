import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});




class SignUp extends Component{
  state = {
    name: "",
    email: "",
    password: "",
    address: "",
    funds: null
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
           funds: this.state.funds
        }
      )
    })
  }



  render(){
    const { classes } = this.props;
    console.log(this.state);
    return(
      <Fragment>
        <Paper>
          <Card>
            <CardContent>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Name"
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
                  id="funds"
                  label="Funds"
                  className={classes.textField}
                  onChange={this.handleChange('funds')}
                  margin="normal"
                />
                <TextField
                  id="address"
                  label="Address"
                  className={classes.textField}
                  onChange={this.handleChange('address')}
                  margin="normal"
                />

                <Button color="secondary" variant="contained"  onClick={this.handleSubmit}>
                  Submit
                </Button>
              </form>
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
