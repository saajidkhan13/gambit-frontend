import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import GainerCard from './GainerCard'
import LoserCard from './LoserCard'
import Typography from '@material-ui/core/Typography';








export default class GainersAndLosers extends Component {




  render(){





    return(
        <Fragment>

            <Typography variant="overline" >
            Gainers
            </Typography>
            <GainerCard handleTicker={this.props.handleTicker}/>

            <Typography variant="overline" >
            Losers
            </Typography>
            <LoserCard />


        </Fragment>

    )
  }
}
