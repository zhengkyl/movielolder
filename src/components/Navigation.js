import React, { useState, useCallback } from "react";
import { Drawer, List, ListItem, makeStyles } from "@material-ui/core";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// import ListAltIcon from "@material-ui/icons/ListAlt";

// import HowToVoteIcon from "@material-ui/icons/HowToVote";

// import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles({
  root: {
    // position:'fixed',
    // bottom:'0',
    width: "100%",
  },
});

const tabs = ["Leaderboard, Vote, Movies, Settings"];

export default function Navigation({ tab, onChange }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer anchor="top" open={open} onClose={toggleDrawer}>
      <List>
        {tabs.map((tab, index) => (
          <ListItem button key={index}>
            {tab}
          </ListItem>
        ))}
      </List>
    </Drawer>
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
