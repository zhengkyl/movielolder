import React, { useCallback, useState } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";

import background from "../images/movielo_red.jpg";

import CreateGalleryView from "./home/CreateGalleryView";
// import classes from "*.module.css";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: -64,
    marginRight: -64,
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop:64,
    paddingBottom:32,
    color: "white",
    display:"flex",
    flexDirection:"column",
  },
  startButton:{
    margin:'auto',
    marginTop:16,
    minWidth:"50%",
    fontWeight:600,
  }
}));

export default function HomeView() {
  const classes = useStyles();
  const [createOpen, setCreateOpen] = useState(false);

  const handleCreateClose = useCallback(() => {
    setCreateOpen(false);
  }, [setCreateOpen]);
  const handleCreateOpen = useCallback(() => {
    setCreateOpen(true);
  }, [setCreateOpen]);

  return (
    <>
      <div className={classes.backdrop}>
        <Typography variant="h2" component="h1">
          movies + elo
        </Typography>
        <Typography variant="h5" component="h2">
          Rate movies in a different way. Get started now.
        </Typography>
        <Button className={classes.startButton} variant="contained" size="large" color="primary" disableElevation>
          Create Gallery
        </Button>
      </div>
      <Typography variant="h3">How It Works</Typography>
      <Typography paragraph>
        Choose your own movies and see how they fall in place.
      </Typography>
      <Button onClick={handleCreateOpen}>Get started</Button>
      <Typography variant="h3">Browse Galleries</Typography>

      <CreateGalleryView open={createOpen} onClose={handleCreateClose} />
    </>
  );
}
