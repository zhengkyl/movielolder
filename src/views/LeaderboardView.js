import React, { useState, useEffect, useCallback } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Typography,
  TableFooter,
} from "@material-ui/core";

function LeaderboardHeader({ headers }) {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell key={index}>
            <Typography variant="h6">{header}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function LeaderboardView({ metaData, ...other }) {
  const { moviesCount } = metaData;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = useCallback((e, newPage) => setPage(newPage), [
    setPage,
  ]);

  const handleChangeRowsPerPage = useCallback(
    (e) => {
      setRowsPerPage(parseInt(e.target.value));
      setPage(0);
    },
    [setRowsPerPage, setPage]
  );

  useEffect(() => {
    //call for new things? using limit
  }, [page]);
  return (
    <>
      <Paper>
        <TableContainer>
          <Table>
            <LeaderboardHeader headers={["Rank", "Movie", "ELO"]} />
            <TableBody></TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          rowsPerPageOptions={[10, 25, 50]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={moviesCount}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
