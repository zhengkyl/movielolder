import React, { useState, useCallback } from "react";
import { CircularProgress, TextField, makeStyles, List, ListItem } from "@material-ui/core";

import { getSearchMovieResults } from "../../privateData";
import SearchResultCard from "../../components/SearchResultCard";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    width: "100%",
  },
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  loading:{
    margin:"auto",
    display:"flex"
  }
}));

export default function MovieSearchView({ galleryId, userKey, adminKey }) {
  const classes = useStyles();

  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false)
  const handleChangeQuery = useCallback(
    (e) => setQuery(encodeURIComponent(e.target.value)),
    [setQuery]
  );

  const handleMovieSearch = useCallback(
    //encodeURIComponent()
    async (e) => {
      e.preventDefault(); //stop reload
      // console.log(e);
      setLoading(true)
      const movieResults = await getSearchMovieResults(
        galleryId,
        encodeURIComponent(query),
        1
      );
      setLoading(false)
      setMovieList(movieResults.data);
    },
    [query, galleryId]
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
      {/* <CircularProgress className={classes.loading}/> */}
      {loading && <CircularProgress className={classes.loading}/>}
      <List>
        {movieList.map((movie) => (
          <ListItem key={movie.id} disableGutters>
            <SearchResultCard
              galleryId={galleryId}
              userKey={userKey}
              adminKey={adminKey}
              movie={movie}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
