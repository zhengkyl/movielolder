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

import { getMovieSearchResults } from "../privateData";
import SearchResultCard from "../components/SearchResultCard";

export default function MovieSearchView({galleryId}) {
  const [movieList, setMovieList] = useState([
    {
      id:'330457',
      posterPath: "/qXsndsv3WOoxszmdlvTWeY688eK.jpg",
      summary:
        "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
      title: "Frozen II",
      added:true,
    },
  ]);

  const handleMovieSearch = useCallback(
    async (e) => {
      e.preventDefault(); //stop reload
      const movieResults = await getMovieSearchResults({query:e.target.value, galleryId: galleryId});
      console.log("hithisis",movieResults)
      setMovieList(movieResults.data.movieList);
    },
    [setMovieList]
  );

  return (
    <>
      <form onSubmit={handleMovieSearch}>
        <TextField
          label="Search for movies..."
          type="search"
          variant="outlined"
          // onChange={}
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
