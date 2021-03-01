import React, { useState, useCallback } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// import ListAltIcon from "@material-ui/icons/ListAlt";
import MenuIcon from "@material-ui/icons/Menu";

// import HowToVoteIcon from "@material-ui/icons/HowToVote";

// import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    justifyContent: "space-between",
    maxWidth: theme.breakpoints.values.md,
    margin: "auto",
  },
}));

const tabs = ["Leaderboard", "Vote", "Movies", "Settings"];

export default function Navigation({ tab, onChange }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  },[setOpen, open]);

  return (
    <AppBar position="static">
      {/* <Container maxWidth="lg"> */}

      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">movielo</Typography>
        <IconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon/>
        </IconButton>
      </Toolbar>
      {/* </Container> */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer}>
        <List>
          {tabs.map((tab, index) => (
            <ListItem button key={index}>
              {tab}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
    // <BottomNavigation
    //   value={tab}
    //   onChange={onChange}
    //   showLabels
    //   className={classes.root}
    // >
    //   <BottomNavigationAction label="Rankings" icon={<ListAltIcon />} />
    //   <BottomNavigationAction label="Vote" icon={<HowToVoteIcon />} />
    //   <BottomNavigationAction label="Add Movie" icon={<MovieIcon />} />
    // </BottomNavigation>
  );
}
