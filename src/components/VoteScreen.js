import React, { useState } from "react"

import ContenderCard from "./ContenderCard"
import { useSpring, animated, interpolate } from "react-spring"
import { useHover, useDrag } from "react-use-gesture"
// import movie from "../images/movie.jpg"

import { Grid, makeStyles } from "@material-ui/core"



const useStyles = makeStyles({
  root: {
    width:`100vw`,
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
    margin:0,
    // height:'100vh',
  }
});
function VoteScreen() {

  const classes = useStyles();
  const [scale1, setScale1] = useState(1);
  const [gray1, setGray1] = useState(0);
  const bind1 = useHover(({ active }) => {
    if (active) {
      setScale1(1.1);
      setScale2(0.9);

      setGray2(90);
    } else {
      setScale1(1);
      setScale2(1);

      setGray2(0);
    }
  });

  const [scale2, setScale2] = useState(1);
  const [gray2, setGray2] = useState(0);
  const bind2 = useHover(({ active }) => {
    if (active) {
      setScale2(1.1);
      setScale1(0.9);

      setGray1(90);
    } else {
      setScale2(1);
      setScale1(1);

      setGray1(0);
    }
  });

  const [winner, setWinner] = useState(0);
  const bigBind = useDrag(({ swipe: [swipeX, swipeY]}) => {
    if (winner === 0) {
      setWinner(swipeY)

    }
  }, {swipeDistance:[30,30], swipeVelocity:[0.25,0.25], axis:'y'})
  // Set the drag hook and define component movement based on gesture data
  // const classes = useStyles();
  return (
    <div {...bigBind()}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        {winner >= 0 ? (
          <Grid
            item
          >
            {/* style = {{transform: interpolate([size], s=>`scale(${s})`) }} */}
            <animated.div
              {...bind1()}
              style={{
                transform: `scale(${scale1})`,
                filter: `grayscale(${gray1}%)`
              }}
            >
              <ContenderCard>hello</ContenderCard>
            </animated.div>
          </Grid>
        ) : (
          <div></div>
        )}
        {winner <= 0 ? (
          <Grid
            item
          >
            <animated.div
              {...bind2()}
              style={{
                transform: `scale(${scale2})`,
                filter: `grayscale(${gray2}%)`
              }}
            >
              <ContenderCard>hello2</ContenderCard>
            </animated.div>
          </Grid>
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
}

export default VoteScreen;
