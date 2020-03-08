import React, { useState, useEffect } from "react";

import ContenderCard from "./ContenderCard";
import { useSpring, animated, interpolate } from "react-spring";
import { useHover, useDrag } from "react-use-gesture";
import firebase from "./firebase";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: `100vw`
  },
  card: {
    height: 300,
    width: 200
  },
  cardInfo: {
    height: 300,
    width: 300
  },
  media: {
    height: 300,
    width: 200
  },
  grid: {
    margin: 0,
    height: "100%"
  }
});

let moviesList = [];

// const updateElo = firebase.functions().httpsCallable('updateElo');
// function sendVoteResults(winner_id, loser_id){
//   updateElo({winnerId:winner_id, loserId: loser_id})
// }
function VoteScreen() {
  const [moviesFetched, setMoviesFetched] = useState(false);

  const classes = useStyles();

  const [currentMovies, setCurrentMovies] = useState([]);
  const [winner, setWinner] = useState(0);
  const vote = () => {};
  const fetchMoviesList = () => {
    const db = firebase
      .firestore()
      .collection(process.env.REACT_APP_MOVIES_COLLECTION_NAME);
    db.get().then(snapshot => {
      snapshot.forEach(doc => moviesList.push({ id: doc.id, ...doc.data() }));
      setMoviesFetched(true);
      console.log(moviesList);
      setCurrentMovies(getCompetingMovies());
    });
  };

  const getCompetingMovies = () => {
    const firstIndex = Math.floor(Math.random() * moviesList.length);
    let secondIndex = Math.floor(Math.random() * moviesList.length);
    if (secondIndex === firstIndex) {
      secondIndex = firstIndex !== 0 ? 0 : moviesList.length;
    }
    console.log([moviesList[firstIndex], moviesList[secondIndex]]);
    return [moviesList[firstIndex], moviesList[secondIndex]];
  };
  useEffect(() => fetchMoviesList(), []);

  return (
    <div
      style={{
        height: `100%`
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        {winner >= 0 ? (
          <Grid item container direction="column" alignItems="center">
            <ContenderCard {...currentMovies[0]}></ContenderCard>
          </Grid>
        ) : (
          <div></div>
        )}
        {winner <= 0 ? (
          <Grid item container direction="column" alignItems="center">

            <ContenderCard {...currentMovies[1]}></ContenderCard>
          </Grid>
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
}

export default VoteScreen;
