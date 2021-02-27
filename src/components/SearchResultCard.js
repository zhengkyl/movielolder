import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  // CardActionArea,
  Button,
  //   IconButton,
  //   Collapse,
  //   Paper
} from "@material-ui/core";
import PosterImage from "./PosterImage";
import { addMovieToGallery } from "../privateData";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "160px",
    display: "flex",
    flex: 1,
    color:"transparent",
    background:"linear-gradient(to bottom, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0.1) 100%)",
    backgroundClip:"text"
  },
  media: {
    height: "100%",
  },
  button: {
    borderRadius:0
  },
  content:{
    flex:1,
  }
}));

function SearchResultCard({
  galleryId,
  id,
  posterPath,
  title,
  summary,
  added,
}) {
  const [addable, setAddable] = useState(!added);
  const classes = useStyles();
  title = title ? title : "No Title Available";
  summary = summary ? summary : "No Summary Available";

  const onAdd = async () => {
    const res = await addMovieToGallery(galleryId, {
      id,
      title,
      summary,
      posterPath,
    });
    if (res) {
      setAddable(false);
    } else {
      // show something like error
    }
  };
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
        onClick={onAdd}
        disabled={!addable}
        className={classes.button}
      >
        {addable ? "Add" : "Added"}
      </Button>
    </Card>
  );
}

export default SearchResultCard;
