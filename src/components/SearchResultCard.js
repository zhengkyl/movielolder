import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  // CardActionArea,
  CardActions,
  Button
  //   IconButton,
  //   Collapse,
  //   Paper
} from "@material-ui/core";
import PosterImage from "./PosterImage";
import firebase from "./firebase";

const useStyles = makeStyles(theme => ({
  card: {
    height: "20vh",
    width: "90%",
    display: "flex",
    flexDirection: "row"
  },
  media: {
    height: "100%",
    width: "auto"
  }
}));

const COLLECTION_NAME = "movies";

function SearchResultCard({ id, posterPath, title, summary }) {
  const [addable, setAddable] = useState(true);
  const classes = useStyles();
  title = title ? title : "No Title Available";
  summary = summary ? summary : "No Summary Available";

  const docRef = firebase
    .firestore()
    .collection(process.env.REACT_APP_MOVIES_COLLECTION_NAME)
    .doc(`${id}`);
  docRef.get().then(docSnapshot => {
    if (docSnapshot.exists) {
      setAddable(false);
    }
  });

  const onAdd = () => {
    // console.log(movie);
    const db = firebase.firestore();
    db.collection(COLLECTION_NAME)
      .doc(`${id}`)
      .set({
        title,
        summary,
        posterPath,
      })
      .then(function() {
        console.log("Document successfully written!");
        setAddable(false);
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
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
            alignItems: "flex-start"
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
