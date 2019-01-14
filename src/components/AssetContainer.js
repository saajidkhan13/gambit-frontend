import React, {Component, Fragment} from 'react'
import AssetInfo from './AssetInfo'

export default class AssetContainer extends Component{


  render(){
    return (
      <Fragment>
        <h1>Asset Container</h1>
        <AssetInfo stock={this.props.stock}/>
      </Fragment>
    )
  }
}
