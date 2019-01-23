import React, {Component, Fragment} from 'react';


class UserTable extends Component{



  add = (a, b) => {
    return a + b
  }

  showInitialValue = () => {
    if(this.props.portfolios){
      const userData = []
      this.props.portfolios.forEach((obj) => {
        userData.push(obj.amount * obj.price_when_purchased)
      })
    return userData.reduce(this.add, 0)
    } else {
      return null
    }
  }

  showCurrentValue = () => {
    if(this.props.portfolios){
      const userData = []

      this.props.portfolios.forEach((obj) => {
        https://api.iextrading.com/1.0/stock/${obj.symbol}/price
        fetch(`https://api.iextrading.com/1.0/stock/${obj.symbol}/price`, {
          method: 'GET'
        })
        .then(r => r.json())
        .then(newValue => {
          userData.push(obj.amount * newValue)
        })
      })
    return userData
    debugger
    }
    else {
      return null
    }

  }

  render(){
    console.log(this.showCurrentValue());
    return(
      <Fragment>
      <h1>User Table</h1>
      <h2>Initial Value: {this.showInitialValue().toLocaleString()}</h2>
      <h2>Current Value: {this.showCurrentValue()} </h2>
      </Fragment>
    )
    debugger
  }

}



export default UserTable
