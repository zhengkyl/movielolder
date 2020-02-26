import React from "react";
import "./App.css";

import movie from "../images/movie.jpg";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Paper,
  Grid,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  card: {
    height: 300,
    width:200,
  },
  cardInfo: {
    height: 300,
    width:300,
  },
  media: {
    height: 300,
    width: 200
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", maxWidth: "100vw" }}
      >
        <Grid
          container
          item
          spacing={4}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Card className={classes.card} raised={true}>
              <CardMedia>
                <img src={movie} className={classes.media} alt="henlo"></img>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item>
            <Card className ={classes.cardInfo}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          item
          spacing={4}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Card className={classes.card} raised={true}>
              <CardMedia>
                <img src={movie} className={classes.media} alt="henlo"></img>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item>
            <Card className ={classes.cardInfo}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>        </Grid>
      </Grid>
    </div>
  );
}

export default App;
