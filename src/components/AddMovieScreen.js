import React, { useState } from "react";

// import firebase from "./firebase";

import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SearchResultCard from "./SearchResultCard";


const API_BASE = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const API_SEARCH = "search/movie?";

// const COLLECTION_NAME = "movies";

// searchTerm is what is currently in the search bar
let searchTerm;
// searchedTerm is what has been sent requested through the API
let searchedTerm;
let delayTimer;
let moviesCache = [];

function searchOnDelay(term, setMovies) {
  searchTerm = term;
  clearTimeout(delayTimer);
  delayTimer = setTimeout(() => searchMovies(term, setMovies), 1000);
}
function searchMovies(term, setMovies) {
  if (searchedTerm !== term) {
    searchedTerm = term;
    console.log("searchMovies");
    const terms = searchTerm.split().join("+");
    fetch(`${API_BASE}${API_SEARCH}${API_KEY}&query=${terms}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setMovies(
          data["results"].map(entry => {
            return {
              id: entry["id"],
              title: entry["title"],
              summary: entry["overview"],
              posterPath: entry["poster_path"]
            };
          })
        );
      });
  }
}

function submitSearch(event, setMovies) {
  event.preventDefault();
  if (searchTerm !== searchedTerm) {
    searchMovies(searchTerm, setMovies);
  }
}

function AddMovieScreen() {
  const [movies, setMovies] = useState(moviesCache);
  // console.log(movies)
  const setMoviesAndCache = newMovies => {
    moviesCache = newMovies;
    setMovies(newMovies);
  };
  return (
    <div
      style={{
        positive: "relative",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      <List style={{ overflow: "auto" }} dense={true} disablePadding={true}>
        {movies.map(m => {
          return (
            <ListItem key={m.id} style={{ justifyContent: "center" }}>
              <SearchResultCard {...m} />
            </ListItem>
          );
        })}
      </List>
      <form onSubmit={e => submitSearch(e, setMoviesAndCache)}>
        <TextField
          style={{ width: "80%", marginTop: "12px" }}
          id="outlined-search"
          label="Search for movies..."
          type="search"
          variant="outlined"
          onChange={event =>
            searchOnDelay(event.target.value, setMoviesAndCache)
          }
        />
      </form>
    </div>
  );
}

export default AddMovieScreen;
