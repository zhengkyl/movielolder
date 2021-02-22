// https://blog.excalidraw.com/end-to-end-encryption/
import firebase from "./components/firebase";

const API_BASE = "https://us-central1-movielo.cloudfunctions.net/api"


export async function getTopMovies(galleryId, number, page) {
  const movies = await fetch(`${API_BASE}/movies/${galleryId}?limit=${number}&page=${page}&sortBy=rating&order=asc`)
  return movies.json();
}

// EVERYTHING BELOW MUST BE REDONE
export const getMovieSearchResults = firebase.functions().httpsCallable("getMovieSearchResults")

function getGalleryRef(galleryId) {
  return firebase
    .firestore()
    .collection(process.env.REACT_APP_GALLERIES_COLLECTION_NAME)
    .doc(galleryId);
}

export async function galleryExists(galleryId) {
  const galleryRef = getGalleryRef(galleryId);
  const gallery = await galleryRef.get();
  return gallery.exists;
}
//moviesCount, 
export async function getGalleryMetaData(galleryId) {
  const galleryRef = getGalleryRef(galleryId);
  const gallery = await galleryRef.get();
  return gallery.data();
}



// this might need to be serverside
export async function addMovieToGallery(galleryId, {id, title, summary, posterPath}) {
  const moviesRef = getGalleryRef(galleryId).collection(
    process.env.REACT_APP_GALLERIES_MOVIES_COLLECTION_NAME
  );
  try {
    await moviesRef.doc(id).set({title:title,summary:summary,posterPath:posterPath})
    return true
  }
  catch (err) {
    return false;
  }
}

// galleries  >  movies [movieId, posterPath, rating]
