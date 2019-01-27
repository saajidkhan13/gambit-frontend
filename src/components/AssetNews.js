import React, { Component, Fragment } from 'react'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  }
});


class AssetNews extends Component {



  render(){
    const news = this.props.news
    return(
      <Fragment>
        <Paper style={{maxHeight: 400, overflow: 'auto'}}>
        {news.map(obj => {
          return <Card>
          <CardContent>
          <Typography>{obj.headline} </Typography>
          <Typography>{obj.source} </Typography>
          <Typography>{obj.datetime} </Typography>
          <Typography>{obj.url} </Typography>
          </CardContent>
          </Card>
        })}
        </Paper>
      </Fragment>
    )
  }
}

export default AssetNews
