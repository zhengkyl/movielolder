import React, { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import RankingsScreen from "./components/RankingsScreen";
// import VoteScreen from "./components/VoteScreen";
// import AddMovieScreen from "./components/AddMovieScreen";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// import ListAltIcon from "@material-ui/icons/ListAlt";

// import HowToVoteIcon from "@material-ui/icons/HowToVote";

// import MovieIcon from "@material-ui/icons/Movie";


// import { useSpring, animated, interpolate } from "react-spring"
// import { useHover, useDrag } from "react-use-gesture"
// // import movie from "../images/movie.jpg"

import CreateGalleryView from "./views/CreateGalleryView";
import NewGalleryView from "./views/NewGalleryView"

import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"
const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column-reverse",
    height: `100vh`,
    maxWidth: 1000,
    margin: "0 auto",
  },
}));

// const test = 2;
function App() {
  const classes = useStyles();
  const [tab, setTab] = useState(window.location.pathname);

  const onTabChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <CreateGalleryView /> */}
        <NewGalleryView/>

      </Container>
    </ThemeProvider>
    </>
  );
  // return (
  //   <div className={classes.app}>
  //     <Router>
  //       <BottomNavigation
  //         value={tab}
  //         onChange={onTabChange}
  //         showLabels
  //         className={classes.root}
  //       >
  //         <BottomNavigationAction
  //           label="Rankings"
  //           icon={<ListAltIcon />}
  //           component={Link}
  //           to="/leaderboard"
  //           value="/leaderboard"
  //         />
  //         <BottomNavigationAction
  //           label="Vote"
  //           icon={<HowToVoteIcon />}
  //           component={Link}
  //           to="/"
  //           value="/"
  //         />
  //         <BottomNavigationAction
  //           label="Add Movie"
  //           icon={<MovieIcon />}
  //           component={Link}
  //           to="/add"
  //           value="/add"
  //         />
  //       </BottomNavigation>
  //       <Switch>
  //         <Route exact path="/leaderboard">
  //           <RankingsScreen />
  //         </Route>
  //         <Route exact path="/">
  //           <VoteScreen />
  //         </Route>
  //         <Route exact path="/add">
  //           <AddMovieScreen />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   </div>
  // );
}

export default App;
