import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles';



import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../redux/actions/user'



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
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
    // console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props)
    const { classes } = this.props;

    return( this.props.loggedIn ? (
      <Redirect to="/stocks" /> ) : (
        <Fragment>
          <main className={classes.main}>
          <CssBaseline />
          <br/><br/>

            <Paper>
            <center>
            <br/><br/>
              <Avatar className={classes.avatar} >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="overline">
                        Sign in
              </Typography>
              <div className="login form"
                size="mini"
                key="mini"
                loading={this.props.authenticatingUser}
                error={this.props.failedLogin}
              >
              <h1 error header={this.props.failedLogin ? this.props.error : null}></h1>
      <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>

            <Input id="name" autoComplete="email" autoFocus
            placeholder="Username"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <Input name="password" type="password" id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password} />
          </FormControl>
          <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             onClick={this.handleLoginSubmit}
           >
             Sign in
           </Button>
           <br/><br/>
           <Typography variant="overline" >
            Not a user? <Link to = "/signup">Sign Up</Link>
           </Typography>
      </form>
    </div>
    </center>
    </Paper>
    </main>
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


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const hocLogin = withStyles(styles)(Login);

export default connect(mapStateToProps, { loginUser })(withRouter(hocLogin))
