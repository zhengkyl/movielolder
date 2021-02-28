import React, { useState, useCallback } from "react";

// import firebase from "./firebase";
import {
  Typography,
  TextField,
  makeStyles,
  Button,
  Paper,
} from "@material-ui/core";
import GalleryLinksTable from "../components/GalleryLinksTable";
import {postCreateGallery} from "../privateData"
const useStyles = makeStyles((theme) => ({
  createButton: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  block: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  keyBlock: {
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      display: "flex",
      "& > div": {
        flex: 1,
      },
      "& >:first-child": {
        marginRight: theme.spacing(2),
      },
      "& >:last-child": {
        marginLeft: theme.spacing(2),
      },
    },
  },
}));

const inputProps={ pattern: "[A-Za-z0-9]{4,20}"}

export default function NewGalleryView() {
  const classes = useStyles();

  const [galleryId, setGalleryId] = useState();
  const [userKey, setUserKey] = useState();
  const [adminKey, setAdminKey] = useState();

  const updateGalleryId = useCallback((e) => setGalleryId(e.target.value), [
    setGalleryId,
  ]);
  const updateUserKey = useCallback((e) => setUserKey(e.target.value), [
    setUserKey,
  ]);
  const updateAdminKey = useCallback((e) => setAdminKey(e.target.value), [
    setAdminKey,
  ]);

  const handleSubmit = useCallback(async(e)=>{
    e.preventDefault()
    console.log("hi submited")
    await postCreateGallery(galleryId, userKey, adminKey)
  },[galleryId, userKey, adminKey])
  return (
    <>
      <Typography variant="h2">Create a new gallery</Typography>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.block}>
          <Typography variant="h6">Gallery Links Setup</Typography>
          <Typography variant="body1">
            Choose a unique identifier for your gallery.
          </Typography>

          <TextField
            id="gallery-id-input"
            label="Gallery ID"
            variant="outlined"
            onChange={updateGalleryId}
            fullWidth
            required
            inputProps={inputProps}
            helperText="3-20 letters/numbers"
          />
          <div className={classes.keyBlock}>
            <div>
              <Typography variant="body1">Choose a user key.</Typography>
              <TextField
                id="user-key-input"
                label="User Key"
                variant="outlined"
                onChange={updateUserKey}
                fullWidth
                required
                inputProps={inputProps}
                helperText="3-20 letters/numbers"
              />
            </div>
            <div>
              <Typography variant="body1">Choose an admin key.</Typography>
              <TextField
                id="admin-key-input"
                label="Admin Key"
                variant="outlined"
                onChange={updateAdminKey}
                fullWidth
                required
                inputProps={inputProps}
                helperText="3-20 letters/numbers"
              />
            </div>
          </div>
        </Paper>
        <GalleryLinksTable
          title="Gallery Links Preview"
          galleryId={galleryId}
          userKey={userKey}
          adminKey={adminKey}
        />
        <Button
          variant="contained"
          className={classes.createButton}
          color="primary"
          type="submit"
        >
          Create Gallery
        </Button>
      </form>
    </>
  );
}
