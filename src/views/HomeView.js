import React, { useCallback, useState } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";

import background from "../images/movielo_red.jpg";
import howAdd from "../images/how_add.png";
import howVote from "../images/how_vote.png";
import howRank from "../images/how_rank.png";

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
    paddingTop: 64,
    paddingBottom: 32,
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  startButton: {
    margin: "auto",
    marginTop: 16,
    minWidth: "50%",
    fontWeight: 600,
  },
  blockContainer:{
    textAlign:"center",
    
    "& img": {
      width:"100%",
    },
    [theme.breakpoints.up("sm")]:{
      display:"flex",
      marginLeft:-theme.spacing(2),
    marginRight:-theme.spacing(2),
      "& > div": {
        flex:1,
        margin:theme.spacing(2)
      },
      
    }
  }
}));

function Block({ title, src, children, ...other }) {
  return (
    <div>
      <img src={src} alt={title} />
      <Typography variant="h4">{title}</Typography>
      <Typography paragraph>{children}</Typography>
    </div>
  );
}

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
        <Button
          className={classes.startButton}
          variant="contained"
          size="large"
          color="primary"
          disableElevation
          onClick={handleCreateOpen}
        >
          Create Gallery
        </Button>
      </div>
      <Typography variant="h3">How It Works</Typography>
      <Typography paragraph>
        Choose your own movies and see how they fall in place.
      </Typography>
      <div className={classes.blockContainer}>
        <Block title="Add movies" src={howAdd}>
        Search for movies powered by The Movie Database API
        </Block>
        <Block title="Vote for movies" src={howVote}>
        Make a series of comparisons
        </Block>
        <Block title="Rank movies" src={howRank}>
        Rank movies based on match rating
        </Block>
      </div>
      <Typography variant="h3">Browse Galleries</Typography>

      <CreateGalleryView open={createOpen} onClose={handleCreateClose} />
    </>
  );
}
