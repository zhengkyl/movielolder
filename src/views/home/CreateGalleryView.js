import React, { useState, useCallback } from "react";

// import firebase from "./firebase";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  Typography,
  TextField,
  makeStyles,
  Button,
  IconButton,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// import GalleryLinksTable from "../../components/GalleryLinksTable";
import { postCreateGallery } from "../../privateData";
const useStyles = makeStyles((theme) => ({
  createButton: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  keyBlock: {
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
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
  dialogTitle:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  },
  error:{
    color:theme.palette.error.main
  }
}));

const inputProps = { pattern: "[A-Za-z0-9]{4,20}" };

export default function NewGalleryView({ open, onClose }) {
  const classes = useStyles();

  const [galleryId, setGalleryId] = useState("");
  const [userKey, setUserKey] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [errorText, setErrorText] = useState("")

  const updateGalleryId = useCallback((e) => setGalleryId(e.target.value), [
    setGalleryId,
  ]);
  const updateUserKey = useCallback((e) => setUserKey(e.target.value), [
    setUserKey,
  ]);
  const updateAdminKey = useCallback((e) => setAdminKey(e.target.value), [
    setAdminKey,
  ]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      // console.log("hi submited")
      const response = await postCreateGallery(galleryId, userKey, adminKey);
      if (response.success) {
        // redirect to page
        console.log("success")
      }
      else {
        console.log("error")
        setErrorText(response.data)
      }
    },
    [galleryId, userKey, adminKey, setErrorText]
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle className={classes.dialogTitle} disableTypography>
          <Typography variant="h6" component="h2">
          Create a new gallery
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Your Gallery ID is public and used to view your gallery. The Admin and User keys give special permissions so don't make it too obvious.
          </DialogContentText>
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
            helperText="4-20 letters/numbers"
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
                helperText="4-20 letters/numbers"
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
                helperText="4-20 letters/numbers"
              />
            </div>
          </div>
          {/* <GalleryLinksTable
            title="Gallery Links Preview"
            galleryId={galleryId}
            userKey={userKey}
            adminKey={adminKey}
          /> */}
          <Typography variant="body1" className={classes.error}>
            {errorText}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            className={classes.createButton}
            color="primary"
            type="submit"
          >
            Create Gallery
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
