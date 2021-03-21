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

function LinkTableRow({title, link, desc}) {
  return (
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
}

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
          <LinkTableRow
            title="Viewer"
            link={`https://movielo.web.app/?gallery=${galleryId}`}
            desc="Viewers can only VIEW galleries."
          />
          {userKey && <LinkTableRow
            title="User"
            link={`https://movielo.web.app/?gallery=${galleryId}&key=${userKey}`}
            desc="Users can ADD, REMOVE, and VOTE on movies."
          />}
          {adminKey && <LinkTableRow
            title="Admin"
            link={`https://movielo.web.app/?gallery=${galleryId}&key=${userKey},${adminKey}`}
            desc="Admins can CHANGE PASSKEYS, and DELETE galleries."
          />}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
