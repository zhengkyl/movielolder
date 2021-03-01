import React, { useCallback, useState } from "react";
import {
  Typography,
  // makeStyles,
  Button,
} from "@material-ui/core";

import CreateGalleryView from "./home/CreateGalleryView";
// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
// }));

export default function HomeView() {
  // const classes = useStyles()
  const [createOpen, setCreateOpen] = useState(false);

  const handleCreateClose = useCallback(() => {
    setCreateOpen(false);
  }, [setCreateOpen]);
  const handleCreateOpen = useCallback(() => {
    setCreateOpen(true);
  }, [setCreateOpen]);

  return (
    <>
      <Typography variant="h1" component="h1">
        Movielo
      </Typography>

      <Typography variant="h2">Create A Gallery</Typography>
      <Typography paragraph>
        Choose your own movies and see how they fall in place.
      </Typography>
      <Button onClick={handleCreateOpen}>Get started</Button>
      <Typography variant="h2">Browse Galleries</Typography>

      <CreateGalleryView open={createOpen} onClose={handleCreateClose} />
    </>
  );
}
