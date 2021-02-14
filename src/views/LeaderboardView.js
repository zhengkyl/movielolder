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
} from "@material-ui/core";
import { getTopMovies } from "../privateData";

function LeaderboardHeader({ headers }) {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell key={index} style={index===1 ? {width:"100%"}:{}}>
            <Typography variant="h6">{header}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function LeaderboardView({ metaData, ...other }) {
  const { moviesCount, galleryId } = metaData;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [movieDocList, setMovieDocList] = useState([]);

  const updateMovieList = useCallback(async () => {
    const lastDoc = movieDocList[movieDocList.length - 1];
    const newList = await getTopMovies(galleryId, rowsPerPage, lastDoc);
    console.log("newlist", newList);
    setMovieDocList(newList);
  }, [galleryId, movieDocList, rowsPerPage]);

  const handleChangePage = useCallback(
    (e, newPage) => {
      setPage(newPage);
      updateMovieList();
    },
    [setPage, updateMovieList]
  );

  const handleChangeRowsPerPage = useCallback(
    (e) => {
      setRowsPerPage(parseInt(e.target.value));
      setPage(0);
    },
    [setRowsPerPage, setPage]
  );
  
  //TODO i don't love this vvvv
  useEffect(() => {
    (async function () {
      const newList = await getTopMovies(galleryId, rowsPerPage);
      setMovieDocList(newList);
    })();
  }, [galleryId, rowsPerPage]);
  return (
    <>
      <Paper>
        <TableContainer>
          <Table>
            <LeaderboardHeader headers={["Rank", "Movie", "Rating", "Wins", "Losses"]} />
            <TableBody>
              {console.log("renders twice on page update")}
              {movieDocList.map((movieDoc, movieIndex) => {
                const movie = movieDoc.data();
                const movieRank = movieIndex + 1 + page * rowsPerPage;
                return (
                  <TableRow key={movieRank}>
                    <TableCell align="right">{movieRank}</TableCell>
                    <TableCell>{movie.title}</TableCell>
                    <TableCell align="right">{movie.rating}</TableCell>
                    <TableCell align="right">{movie.wins}</TableCell>
                    <TableCell align="right">{movie.losses}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
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
