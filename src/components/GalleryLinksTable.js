import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";

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

export default function GalleryLinksTable({
  title,
  galleryId,
  userKey,
  adminKey,
}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h6">{title}</Typography>
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
  );
}
