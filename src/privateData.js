// https://blog.excalidraw.com/end-to-end-encryption/
// import firebase from "./components/firebase";

const API_BASE = "https://us-central1-movielo.cloudfunctions.net/api"
//TODO do {data, error, loading} like in swr

export async function getTopMovies(galleryId, number, page) {
  const movies = await fetch(`${API_BASE}/galleries/${galleryId}/movies?limit=${number}&page=${page}&sortBy=rating&order=desc`)
  return movies.ok ? movies.json(): {data:[]};
}

export async function getSearchMovieResults(galleryId, queryString, page) {
  const movies = await fetch(`${API_BASE}/search/${galleryId}/movies?query=${queryString}&page=${page}`)
  return movies.ok ? movies.json(): {data:[]};
}

export async function postCreateGallery(galleryId, userKey, adminKey) {
  const response = await fetch(`${API_BASE}/edit/${galleryId}/create`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({userKey, adminKey})
  })

  // console.log(response)
  return response.json();
}
// movie is {id, posterPath, summary, title, year}
export async function postAddMovie(galleryId, key, movie) {
  console.log(movie)
  const response = await fetch(`${API_BASE}/edit/${galleryId}/addMovie`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({galleryId, key, movie})
  })

  // console.log(response)
  // const t = await response.json();
  // console.log(t)
  return response.json();
}

// // EVERYTHING BELOW MUST BE REDONE
// export const getMovieSearchResults = firebase.functions().httpsCallable("getMovieSearchResults")

// function getGalleryRef(galleryId) {
//   return firebase
//     .firestore()
//     .collection(process.env.REACT_APP_GALLERIES_COLLECTION_NAME)
//     .doc(galleryId);
// }

// export async function galleryExists(galleryId) {
//   const galleryRef = getGalleryRef(galleryId);
//   const gallery = await galleryRef.get();
//   return gallery.exists;
// }
// //moviesCount, 
// export async function getGalleryMetaData(galleryId) {
//   const galleryRef = getGalleryRef(galleryId);
//   const gallery = await galleryRef.get();
//   return gallery.data();
// }



// // this might need to be serverside
// export async function addMovieToGallery(galleryId, {id, title, summary, posterPath}) {
//   const moviesRef = getGalleryRef(galleryId).collection(
//     process.env.REACT_APP_GALLERIES_MOVIES_COLLECTION_NAME
//   );
//   try {
//     await moviesRef.doc(id).set({title:title,summary:summary,posterPath:posterPath})
//     return true
//   }
//   catch (err) {
//     return false;
//   }
// }

// galleries  >  movies [movieId, posterPath, rating]
