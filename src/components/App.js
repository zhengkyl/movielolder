import React, { useState } from "react";
import "./App.css";

import Navigation from "./Navigation";
import RankingsScreen from "./RankingsScreen";
import VoteScreen from "./VoteScreen";
import AddMovieScreen from "./AddMovieScreen";

// import { useSpring, animated, interpolate } from "react-spring"
// import { useHover, useDrag } from "react-use-gesture"
// // import movie from "../images/movie.jpg"

// import { Grid, makeStyles } from "@material-ui/core"

const NAVIGATION_STATES = {
  0: <RankingsScreen />,
  1: <VoteScreen />,
  2: <AddMovieScreen />
};

// const test = 2;
function App() {
  const [tab, setTab] = useState(1);
  const onTabChange = (event, newValue) => {
    setTab(newValue);
  };

  // const [winner, setWinner] = useState(0);

  return (
    <div className="App">
      {NAVIGATION_STATES[tab]}
      <Navigation tab={tab} onChange={onTabChange}></Navigation>
    </div>
  );
}

export default App;
