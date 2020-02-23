import React from 'react';
import './App.css';

import movie from '../images/movie.jpg'

import { Card, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {

  },
  card:{
    maxWidth:300,
  },
  media:{
    height:300,
  }
})


function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia>
          <img src={movie} className={classes.media} alt="henlo"></img>
        </CardMedia>

      </Card>
    </div>
  );
}

export default App;
