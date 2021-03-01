import React, { useState } from "react";

// import Navigation from "./components/Navigation";
import CreateGalleryView from "./home/CreateGalleryView";
import GallerySettingsView from "./gallery/GallerySettingsView";
import LeaderboardView from "./gallery/LeaderboardView";
import MovieSearchView from "./gallery/MovieSearchView";
import {
  Tabs,
  Tab,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   app: {
//   },
// }));
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
function GalleryView({ galleryId, passkey }) {
  // const classes = useStyles();
  const [tab, setTab] = useState(0);

  const onTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
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
        <GallerySettingsView />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <MovieSearchView galleryId={galleryId} passkey={passkey}/>
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <LeaderboardView metaData={{ moviesCount: 67, galleryId: galleryId }} />
      </TabPanel>
    </>
  );
}

export default GalleryView;
