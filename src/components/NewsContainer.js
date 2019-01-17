import React, {Component, Fragment} from 'react';
import NewsCard from './NewsCard'

export default class NewsContainer extends Component {


  render(){
    const newsData = this.props.news
    return(
      <Fragment>
        {newsData.map(array => {
          return <NewsCard key={array.datetime} news={array} />
        })}
      </Fragment>
    )
  }
}
