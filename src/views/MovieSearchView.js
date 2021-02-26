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

import { getSearchMovieResults } from "../privateData";
// import { getMovieSearchResults } from "../privateData";
import SearchResultCard from "../components/SearchResultCard";

export default function MovieSearchView({ galleryId }) {
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
      console.log("hithisis", movieResults);
      setMovieList(movieResults.data);
    },
    [query]
  );

  return (
    <>
      <form onSubmit={handleMovieSearch}>
        <TextField
          label="Search for movies..."
          type="search"
          variant="outlined"
          onChange={handleChangeQuery}
        />
      </form>
      <List>
        {movieList.map((movie) => (
          <ListItem key={movie.id}>
            <SearchResultCard galleryId={galleryId} {...movie} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
