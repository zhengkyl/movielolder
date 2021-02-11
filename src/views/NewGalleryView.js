import React, { useState, useCallback } from "react";

// import firebase from "./firebase";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  makeStyles,
  // CardActionArea,
  CardActions,
  Button,
  //   IconButton,
  //   Collapse,
  //   Paper
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  linkRow: {
    display: "flex",
  },
}));

export default function NewGalleryView() {
  const classes = useStyles();

  const [galleryId, setGalleryId] = useState();
  const [regularKey, setRegularKey] = useState();
  const [adminKey, setAdminKey] = useState();

  const updateGalleryId = useCallback(
    (e) => {
      setGalleryId(e.target.value);
    },
    [setGalleryId]
  );
  const updateRegularKey = useCallback(
    (e) => {
      setRegularKey(e.target.value);
    },
    [setRegularKey]
  );
  const updateAdminKey = useCallback(
    (e) => {
      setAdminKey(e.target.value);
    },
    [setAdminKey]
  );
  return (
    <>
      <TextField
        id="gallery-id-input"
        label="Gallery ID"
        variant="outlined"
        onChange={updateGalleryId}
      />
      <TextField
        id="regular-pp-input"
        label="Regular Key"
        variant="outlined"
        onChange={updateRegularKey}
      />
      <TextField
        id="admin-pp-input"
        label="Admin Key"
        variant="outlined"
        onChange={updateAdminKey}
      />
      <div className={classes.linkRow}>
        <Typography variant="h4">
          Viewing Link
        </Typography>
      <Typography>{`https://movielo.web.app/?gallery=${galleryId}`}</Typography>
      </div>
      <Typography>
        {`https://movielo.web.app/?gallery=${galleryId}&key=${regularKey}`}
      </Typography>
      <Typography>
        {`https://movielo.web.app/?gallery=${galleryId}&key=${adminKey}`}
      </Typography>
    </>
  );
}
