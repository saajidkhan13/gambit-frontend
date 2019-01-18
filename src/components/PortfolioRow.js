import React, {Component, Fragment} from 'react'

export default class PortfolioRow extends Component{


  render(){
    const data=this.props.data
    return(
      <Fragment>
        <tr>
        <td>{data.name} </td>
        <td>{data.price_when_purchased}</td>
        <td>{data.symbol} </td>
        <td>{data.sector} </td>
        <td>{data.date_bought} </td>
        </tr>
      </Fragment>
    )
  }
}
