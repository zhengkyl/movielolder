import React, { useState, useCallback } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import PosterImage from "./PosterImage";
import { postAddMovie } from "../privateData";
const useStyles = makeStyles((theme) => ({
  card: {
    height: "160px",
    display: "flex",
    flex: 1,
    color: "transparent",
    background:
      "linear-gradient(to bottom, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0.1) 100%)",
    backgroundClip: "text",
  },
  media: {
    height: "100%",
  },
  button: {
    borderRadius: 0,
  },
  content: {
    flex: 1,
  },
}));

function SearchResultCard({ galleryId, passkey, movie }) {
  let {
    id,
    posterPath,
    title = "No Title Available",
    summary = "No Summary Available",
    added,
    year,
  } = movie;
  const [movieAdded, setMovieAdded] = useState(added);
  const classes = useStyles();
  // title = title ? title : "No Title Available";
  // summary = summary ? summary : "No Summary Available";

  const handleAdd = useCallback(async () => {
    const response = await postAddMovie(galleryId, passkey, {
      id,
      posterPath,
      title,
      summary,
      added,
      year,
    });
    if (response.success) {
      setMovieAdded(true)
    }
  }, [added, galleryId, id, passkey, posterPath, summary, title, year]);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}>
        <PosterImage path={posterPath} />
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        <Typography paragraph>{summary}</Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        disabled={movieAdded}
        className={classes.button}
      >
        {movieAdded ? "Added" : "Add"}
      </Button>
    </Card>
  );
}

export default SearchResultCard;
