import React, { useState, useEffect } from "react";

import ContenderCard from "./ContenderCard";
import { useSpring, animated, interpolate } from "react-spring";
import { useHover, useDrag } from "react-use-gesture";
// import movie from "../images/movie.jpg"
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
  // const [scale1, setScale1] = useState(1);
  // const [gray1, setGray1] = useState(0);
  // const bind1 = useHover(({ active }) => {
  //   if (active) {
  //     setScale1(1.1);
  //     setScale2(0.9);

  //     setGray2(90);
  //   } else {
  //     setScale1(1);
  //     setScale2(1);

  //     setGray2(0);
  //   }
  // });

  // const [scale2, setScale2] = useState(1);
  // const [gray2, setGray2] = useState(0);
  // const bind2 = useHover(({ active }) => {
  //   if (active) {
  //     setScale2(1.1);
  //     setScale1(0.9);

  //     setGray1(90);
  //   } else {
  //     setScale2(1);
  //     setScale1(1);

  //     setGray1(0);
  //   }
  // });
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

  // const bigBind = useDrag(
  //   ({ swipe: [swipeX, swipeY] }) => {
  //     if (winner === 0) {
  //       setWinner(swipeY);
  //     }
  //   },
  //   { swipeDistance: [30, 30], swipeVelocity: [0.25, 0.25], axis: "y" }
  // );
  // Set the drag hook and define component movement based on gesture data
  // const classes = useStyles();
  return (
    <div
      // {...bigBind()}
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
            {/* style = {{transform: interpolate([size], s=>`scale(${s})`) }} */}
            {/* <animated.div
              // {...bind1()}
              // style={{
              //   transform: `scale(${scale1})`,
              //   filter: `grayscale(${gray1}%)`
              // }}
            > */}
            <ContenderCard {...currentMovies[0]}></ContenderCard>
            {/* </animated.div> */}
          </Grid>
        ) : (
          <div></div>
        )}
        {winner <= 0 ? (
          <Grid item container direction="column" alignItems="center">
            {/* <animated.div
              // {...bind2()}
              // style={{
              //   transform: `scale(${scale2})`,
              //   filter: `grayscale(${gray2}%)`
              // }}
            > */}
            <ContenderCard {...currentMovies[1]}></ContenderCard>
            {/* </animated.div> */}
          </Grid>
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
}

export default VoteScreen;
