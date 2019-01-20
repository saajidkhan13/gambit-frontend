import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

class TickerTable extends Component {

  render(){
    const ticker = this.props.ticker
    return (
      <tr>
        <td onClick={this.props.handleTicker}><Link to ="/stock" >{ticker.symbol}</Link></td>
        <td>{ticker.title}</td>
      </tr>
    )
  }
}

export default TickerTable
