import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
    makeStyles,
  //   CardActions,
  //   IconButton,
  //   Collapse,
  //   Paper
} from "@material-ui/core";
import PosterImage from "./PosterImage";

const useStyles = makeStyles(theme => ({
    root: {},
    card: {
      height: 300,
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
    },
    media: {
      height: '100%',
      width: 'auto',
    },
  }));

function SearchResultCard({ posterPath, title, summary }) {
    const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia className ={classes.media}>
        <PosterImage path={posterPath} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography paragraph>{summary}</Typography>
      </CardContent>
    </Card>
  );
}

export default SearchResultCard;
