import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../redux/actions/user'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



class Login extends Component{
  state = { name: '', password: '' }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("i have been clicked");
    this.props.loginUser(this.state.name, this.state.password) //comes from mapDispatchToProps
    this.setState({ username: '', password: '' }) //reset form to initial state
  }





  render(){
    console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props)
    return( this.props.loggedIn ? (
      <Redirect to="/dashboard" /> ) : (
      <Fragment>
      <div className="login form"
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
      >
      <h1 error header={this.props.failedLogin ? this.props.error : null}></h1>
      <Input
        label="name"
        placeholder="name"
        name="name"
        onChange={this.handleChange}
        value={this.state.email}
      />
      <Input
        type="password"
        label="password"
        placeholder="password"
        name="password"
        onChange={this.handleChange}
        value={this.state.password}
      />
      <Button onClick={this.handleLoginSubmit} type="submit" variant="contained" color="secondary" className="login button">
        LOGIN
      </Button>
    </div>
    </Fragment> )
  )
}

}

const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})


export default withRouter(connect(mapStateToProps, { loginUser })(Login))
