import React, {Component, Fragment} from 'react';
import NewsCard from './NewsCard'

export default class NewsContainer extends Component {
state = {news: []}

componentDidMount(){
  fetch('https://api.iextrading.com/1.0/stock/aapl/news')
    .then(r => r.json())
    .then(data => {
      this.setState({news: data})
    })
}

  render(){
    const newsData = this.state.news
    return(
      <Fragment>
      {newsData.map(array => {
        return <NewsCard key={array.datetime} news={array} />
      })}
      </Fragment>
    )
  }
}
