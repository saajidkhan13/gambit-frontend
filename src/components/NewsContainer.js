import React, {Component, Fragment} from 'react';
import NewsCard from './NewsCard'

import {connect} from 'react-redux'
import { fetchDashboardNews } from '../redux/actions/dashboardNews'



class NewsContainer extends Component {


  render(){
    const newsData = this.props.dashboardNewsReducer.news
    console.log(newsData);
    return(
      <Fragment>
        {newsData.map(obj => {
          return <NewsCard key={obj.datetime} news={obj} />
        })}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ dashboardNewsReducer }) => ({
  dashboardNewsReducer
})


export default connect(mapStateToProps, { fetchDashboardNews })(NewsContainer)
