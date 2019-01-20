import React, {Component, Fragment} from 'react'
import AssetInfo from './AssetInfo'
import AssetChart from './AssetChart'




export default class AssetContainer extends Component{
  state={
    chartToDisplay: []
  }

  componentDidMount(){
    const ticker = this.props.stockToDisplay

    const API = `http://localhost:3000/api/v1/stocks/chart/${ticker}`
    fetch(API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(r => r.json())
    .then(data => {
      this.setState({chartToDisplay: data});
    })
  }

  render(){
    console.log(this.props);
    return (
      <Fragment>
      <h1>hello</h1>
      {this.state.chartToDisplay ? <AssetContainer stock={this.state.chartToDisplay} /> : <h1>no</h1>}
      </Fragment>
    )
  }
}
