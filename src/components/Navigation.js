import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import ListAltIcon from "@material-ui/icons/ListAlt";

import HowToVoteIcon from "@material-ui/icons/HowToVote";

import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles({
  root: {
    // position:'fixed',
    // bottom:'0',
    width: "100%"
  }
});

export default function Navigation({ tab, onChange }) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={tab}
      onChange={onChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Rankings" icon={<ListAltIcon />} />
      <BottomNavigationAction label="Vote" icon={<HowToVoteIcon />} />
      <BottomNavigationAction label="Add Movie" icon={<MovieIcon />} />
    </BottomNavigation>
  );
}
