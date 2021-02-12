import React, { useState, useCallback } from "react";

// import firebase from "./firebase";
import {
  Typography,
  TextField,
  makeStyles,
  Button,
  Paper,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
const createTableRow = (title, link, desc) => (
  <>
    <TableRow>
      <TableCell style={{ borderBottom: "none" }}>
        <Typography variant="h5">{title}</Typography>
      </TableCell>
      <TableCell style={{ borderBottom: "none" }} align="left">
        <Typography variant="h6">{link}</Typography>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={2}>
        <Typography>{desc}</Typography>
      </TableCell>
    </TableRow>
  </>
);
export default function NewGalleryView() {
  const classes = useStyles();

  const [galleryId, setGalleryId] = useState();
  const [userKey, setUserKey] = useState();
  const [adminKey, setAdminKey] = useState();

  const updateGalleryId = useCallback(
    (e) => {
      setGalleryId(e.target.value);
    },
    [setGalleryId]
  );
  const updateUserKey = useCallback(
    (e) => {
      setUserKey(e.target.value);
    },
    [setUserKey]
  );
  const updateAdminKey = useCallback(
    (e) => {
      setAdminKey(e.target.value);
    },
    [setAdminKey]
  );
  return (
    <>
      <Typography variant="h2">Create a new gallery</Typography>
      <Paper className={classes.block}>
        <Typography variant="h6">Gallery Links Setup</Typography>
        <Typography variant="body1">
          Choose a unique identifier for your gallery. (3-20 alphanumeric
          characters)
        </Typography>
        <TextField
          id="gallery-id-input"
          label="Gallery ID"
          variant="outlined"
          onChange={updateGalleryId}
          fullWidth
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
            />
          </div>
        </div>
      </Paper>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="h6">Gallery Links Preview</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createTableRow(
              "Viewer",
              `https://movielo.web.app/?gallery=${galleryId}`,
              "Viewers can only VIEW galleries."
            )}
            {createTableRow(
              "User",
              `https://movielo.web.app/?gallery=${galleryId}&key=${userKey}`,
              "Users can VOTE and ADD MOVIES to galleries."
            )}
            {createTableRow(
              "Admin",
              `https://movielo.web.app/?gallery=${galleryId}&key=${adminKey}`,
              "Admins can REMOVE MOVIES, CHANGE LINKS, and DELETE galleries."
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" className={classes.createButton} color="primary">
        Create Gallery
      </Button>
    </>
  );
}
