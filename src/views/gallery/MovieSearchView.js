import React, { useState, useCallback } from "react";
import {
  Typography,
  TextField,
  makeStyles,
  Button,
  Paper,
  List,
  ListItem,
} from "@material-ui/core";

import { getSearchMovieResults } from "../../privateData";
import SearchResultCard from "../../components/SearchResultCard";

const useStyles = makeStyles((theme) => ({
  searchBox:{
    width:"100%",
  },
  form:{
    padding:theme.spacing(2)
  }
}));

export default function MovieSearchView({ galleryId }) {
  const classes = useStyles()

  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const handleChangeQuery = useCallback(
    (e) => setQuery(encodeURIComponent(e.target.value)),
    [setQuery]
  );

  const handleMovieSearch = useCallback(
    //encodeURIComponent()
    async (e) => {
      e.preventDefault(); //stop reload
      console.log(e)
      const movieResults = await getSearchMovieResults(
        encodeURIComponent(query),
        1
      );
      setMovieList(movieResults.data);
    },
    [query]
  );

  return (
    <>
      <form onSubmit={handleMovieSearch} className={classes.form}>
        <TextField
          label="Search for movies..."
          type="search"
          variant="outlined"
          onChange={handleChangeQuery}
          className={classes.searchBox}
        />
      </form>
      <List>
        {movieList.map((movie) => (
          <ListItem key={movie.id}>
            <SearchResultCard galleryId={galleryId}
              id={movie.id}
              posterPath={movie.posterPath}
              summary={movie.summary}
              title={movie.title}
              // added={movie.}
              />
          </ListItem>
        ))}
      </List>
    </>
  );
}
