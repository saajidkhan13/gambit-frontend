import React, {Component, Fragment} from 'react';
import AssetInfo from './AssetInfo';
import AssetChart from './AssetChart';

import Typography from '@material-ui/core/Typography';


export default class AssetContainer extends Component{

  render(){
    const chart = this.props.chartToDisplay
    const info = this.props.companyInfo

    return (
      <Fragment>
      <Typography variant="h2" gutterBottom>
        {info ? info.companyName : "Loading"}
      </Typography>
      {chart ? <AssetChart chart={chart} handleTimeLine={this.props.handleTimeLine} /> : <h1>no</h1>}
      {info ? <AssetInfo info={info} /> : <h1>no</h1>}
      </Fragment>
    )
  }
}
