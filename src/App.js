import React, { Component, Fragment } from 'react';
import AssetContainer from './components/AssetContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'



const API = "http://localhost:3000/api/v1/stocks/chart/nflx"

class App extends Component {
  state = { stock: [] }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(data => {
        this.setState({stock: data})
      })
  }

handleChart = (array) => {
  const newArray = array.map(x => x.open > 2)
  return newArray
}

  render() {
    console.log(this.state.stock);
    return (
      <Fragment>
      <MuiThemeProvider>
      <AppBar />
        <h1>Hello yall</h1>
        <AssetContainer stock={this.state.stock}/>
      </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
