import React from "react";
import {
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import GalleryLinksTable from "../components/GalleryLinksTable";

const useStyles = makeStyles((theme) => ({

  block: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    color:"white",
    backgroundColor:theme.palette.warning.main
  },

}));
export default function NewGalleryView({ galleryId, userKey, adminKey }) {
  const classes = useStyles()
  return (
    <>
    <Typography variant="h2" component="span">
      Success!
    </Typography>
      <Typography variant="h2" component="h1">
        Your new gallery is live!
      </Typography>
      <Paper className={classes.block}>

      <Typography variant="h4" component="h2">
        Make sure you do not lose the admin link.
      </Typography>
      <Typography>
        Admins can find this entire table under the sharing tab. Users will only
        see the User and Viewer links, and Viewers will only see the Viewer link.
      </Typography>
      </Paper>
      <GalleryLinksTable
        title="Gallery Links"
        galleryId={galleryId}
        userKey={userKey}
        adminKey={adminKey}
      />


      
    </>
  );
}
