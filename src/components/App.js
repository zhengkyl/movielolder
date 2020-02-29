import React from "react";
import "./App.css";

import ContenderCard from "./ContenderCard"

import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
// import movie from "../images/movie.jpg";

import {
  Grid,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
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
  }
});

function App() {
  // const [{ x, y ,}, set] = useSpring(() => ({ x: 0, y: 0 }));
  // // Set the drag hook and define component movement based on gesture data
  // const bind = useDrag(({ down, movement: [mx, my] }) => {
  //   set({ x: 0, y: down ? my : 0 });
  // });
  // const classes = useStyles();
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
          
        <ContenderCard></ContenderCard>
        <ContenderCard></ContenderCard>
          
        </Grid>
    </div>
  );
}

export default App;
