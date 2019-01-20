import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import TickerTable from './TickerTable'


class StockIndexContainer extends Component {
  state = {
    term: ""
  }



  handleChange = (event) => {
    console.log('i am being hit');
    this.setState({term: event.target.value})
  }

  filteredStocks = () => {
    const mappedStocks = this.props.stocksReducer.stocks
    const newStocks = mappedStocks.filter(stock => {
      return stock.title.toLowerCase().includes(this.state.term.toLowerCase())
    })
    return newStocks.slice(0, 10)
  }


  render(){
    console.log(this.props);
    const stocks = this.props.stocksReducer.stocks
    return (
      <Fragment>
      <h1>hello</h1>
        <div>
          <input type="text"
            placeholder="Search Stocks"
            onChange={this.handleChange}
          />
        <table>
          <tbody>
            <tr>
              <th>
                <h3>Symbol</h3>
              </th>
              <th>
                <h3>Name</h3>
              </th>
            </tr>
            {this.filteredStocks().map(ticker => {
              return <TickerTable handleTicker={this.props.handleTicker} key={ticker.symbol} ticker={ticker} />
            })}
          </tbody>
        </table>
        </div>
      </Fragment>
    )
  }
}


const mapStateToProps = ({stocksReducer}) => ({
  stocksReducer
})

export default connect(mapStateToProps)(StockIndexContainer)
