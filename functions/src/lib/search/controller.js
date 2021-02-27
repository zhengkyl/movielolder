const { firestore, ENV_VARS } = require("../../firestore");
const fetch = require("node-fetch");

const searchBase = "https://api.themoviedb.org/3/search/movie";
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
exports.getMovieResults = async function (req, res, next) {
  const queryString = req.query.query;
  const page = parseInt(req.query.page) || 1;
  
  const searchUrl = `${searchBase}?api_key=${ENV_VARS.tmdb.key}&query=${queryString}&page=${page}`;
  
  try {
    const result = await fetch(searchUrl);
    const data = await result.json();
    let movieResults = [];
    if (result.ok) {
      movieResults = data.results.map((movie) => {
        return {
          id:movie.id,
          posterPath: movie.poster_path,
          summary: movie.overview,
          title: movie.title,
          year: new Date(movie.release_date).getFullYear().toString(),
        };
      });
    }

    return res.status(result.status).json({
      success: result.ok,
      data: movieResults,
    });
  } catch (e) {
    return next(e);
  }
};

exports.getGalleryResults = async function (req, res, next) {
  const queryString = req.query.query;
  const page = parseInt(req.query.page) || 1;

  const galleriesRef = firestore.collection("galleries").where("title", "==");
};
