import React, { useState } from "react";
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

import CreateGalleryView from "./views/CreateGalleryView";
import NewGalleryView from "./views/NewGalleryView";
import LeaderboardView from "./views/LeaderboardView";
import MovieSearchView from "./views/MovieSearchView";
import {
  CssBaseline,
  Container,
  makeStyles,
  Tabs,
  Tab,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
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
// TabPanel and a11Props copied from Material UI Tab example
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// const test = 2;
function App({ galleryId, passkey }) {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const onTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Tabs
            value={tab}
            onChange={onTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Charts" {...a11yProps(0)} />
            <Tab label="Vote" {...a11yProps(1)} />
            <Tab label="Gallery" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <CreateGalleryView />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <MovieSearchView galleryId={galleryId} />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <LeaderboardView metaData={{ moviesCount: 67, galleryId: "kgg" }} />
          </TabPanel>

          <TabPanel value={tab} index={3}>
            <NewGalleryView />
          </TabPanel>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
