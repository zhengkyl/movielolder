import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import RankingsScreen from "./components/RankingsScreen";
// import VoteScreen from "./components/VoteScreen";
// import AddMovieScreen from "./components/AddMovieScreen";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// import { useSpring, animated, interpolate } from "react-spring"
// import { useHover, useDrag } from "react-use-gesture"
// // import movie from "../images/movie.jpg"
import Navigation from "./components/Navigation";
import GalleryView from "./views/GalleryView";
import HomeView from "./views/HomeView";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
const useStyles = makeStyles((theme) => ({
  app: {
    overflow: "hidden",
  },
}));

// const test = 2;
function App({ galleryId, userKey, adminKey }) {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Container maxWidth="md" className={classes.app}>
          {galleryId ? (
            <GalleryView
              galleryId={galleryId}
              userKey={userKey}
              adminKey={adminKey}
            />
          ) : (
            <HomeView />
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
