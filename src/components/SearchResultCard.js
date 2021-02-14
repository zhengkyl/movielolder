import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  // CardActionArea,
  CardActions,
  Button,
  //   IconButton,
  //   Collapse,
  //   Paper
} from "@material-ui/core";
import PosterImage from "./PosterImage";
import { addMovieToGallery } from "../privateData";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "20vh",
    display: "flex",
    flexDirection: "row",
  },
  media: {
    height: "100%",
    width: "auto",
  },
}));

function SearchResultCard({ galleryId, id, posterPath, title, summary, added }) {
  const [addable, setAddable] = useState(!added);
  const classes = useStyles();
  title = title ? title : "No Title Available";
  summary = summary ? summary : "No Summary Available";

  const onAdd = async () => {
    const res = await addMovieToGallery(galleryId, { id, title, summary, posterPath });
    if (res) {
      setAddable(false)
    } else {
      // show something like error
    }
    console.log(res)
  };
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}>
        <PosterImage path={posterPath} />
      </CardMedia>
      <CardContent style={{ flex: "1" }}>
        <Typography variant="h5">{title}</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Typography paragraph style={{ flex: "1" }}>
            {summary}
          </Typography>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={onAdd}
              disabled={!addable}
            >
              {addable ? "Add" : "Added"}
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}

export default SearchResultCard;
