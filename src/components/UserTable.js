import React, {Component, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';


import { RadialChart } from 'react-vis';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});


class UserTable extends Component{
  state = {
    total: 0
  }

  componentDidUpdate(prevProps) {
    if (this.props.portfolios.length > prevProps.portfolios.length) {
      this.showCurrentValue()
    }
  }

  addNumbers = (a, b) => {
    return a + b
  }

  showInitialValue = () => {
    if(this.props.portfolios){
      const userData = []
      this.props.portfolios.forEach((obj) => {
        userData.push(obj.amount * obj.price_when_purchased)
      })
    return userData.reduce(this.addNumbers, 0)
    } else {
      return null
    }
  }

  showPercentageValue = () => {
    if(this.props.portfolios){
      const newData = []
      this.props.portfolios.forEach((obj) => {
        newData.push({angle: ((obj.amount * obj.price_when_purchased) / this.showInitialValue()) * 100, label: obj.name, padAngle: 1  })
      })
    return newData
    } else {
      return null
    }
  }

  showCurrentValue = () => {
    if(this.props.portfolios.length){
      const newData = []
      let total = 0
      this.props.portfolios.forEach((obj) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stocks/price/${obj.symbol.toLowerCase()}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
          }
        })
        .then(r => r.json())
        .then(newValue => {
          debugger
          // newData.push(obj.amount * newValue.price)
          this.setState((prevState) => ({
            total: prevState.total + (obj.amount * newValue.price)
          }))
        })
      })
    // return newData
    return total
    }
    else {
      return null
    }

  }

  // fetchPrice = async (obj) => {
  //   const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stocks/price/${obj.symbol.toLowerCase()}`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('jwt')}`
  //     }
  //   })
  //   const json = await response.json()
  //   return json
  // }

  render(){
    // console.log(this.showCurrentValue());
    return(
      <Fragment>
      <br/><br/>

      <Grow
         in={true}
         timeout={2500}
       >
      <Paper>

      <Typography variant="overline">Initial Value: {this.showInitialValue().toLocaleString()}</Typography>
      <Typography variant="overline">Current Value: {this.state.total} </Typography>
      <Typography variant="overline">Change: {(this.showInitialValue() - this.state.total).toLocaleString()} </Typography>
      <Typography variant="overline">Purchases: {this.props.portfolios.length}</Typography>
      </Paper>
      </Grow>
      <br/>
      <Divider />
      <br/>
      <Grow
         in={true}
         timeout={3500}
       >
      <Paper style={{minHeight: 450 }}>
      <center>
      <RadialChart
        data={this.showPercentageValue()}
        animation={ {
          damping: 50,
          stiffness: 300
        }}
        radius={200}
        showLabels={true}
        labelsAboveChildren={false}
        labelsRadiusMultiplier={1.2}
        width={400}
        height={400} />

      </center>
      </Paper>
      </Grow>


      </Fragment>
    )
  }

}



export default UserTable
