// https://blog.excalidraw.com/end-to-end-encryption/
import firebase from "./components/firebase";

export async function getGalleryAndPermission() {
  const searchString = window.location.search;
  const urlParams = new URLSearchParams(searchString);

  const galleryId = urlParams.get("gallery");
  const permissionPass = urlParams.get("pp");

  //https://blog.excalidraw.com/end-to-end-encryption/
  // const key = await window.crypto.subtle.generateKey(
  //   { name: "AES-GCM", length: 128 },
  //   true, // extractable
  //   ["encrypt", "decrypt"]
  // );
}

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

export async function getTopMovies(galleryId, number, prevEnd) {
  const moviesRef = getGalleryRef(galleryId).collection(
    process.env.REACT_APP_GALLERIES_MOVIES_COLLECTION_NAME
  );
  let topMovies = moviesRef.orderBy("rating", "desc");
  if (prevEnd) {
    topMovies = topMovies.startAfter(prevEnd);
  }
  topMovies = topMovies.limit(number);

  const snapshot = await topMovies.get();
  return snapshot.docs;
}

// export async function subscribeTopMoviesUpdates(galleryId, number, updateCallback) {
//   const moviesRef = getGalleryRef(galleryId).collection(
//     process.env.REACT_APP_GALLERIES_MOVIES_COLLECTION_NAME
//   );
//   const unsubscribe = moviesRef
//     .orderBy("rating", )
//     .limit(number)
//     .onSnapshot((snapshot) => {
//       updateCallback(snapshot.data());
//     });
//   return unsubscribe;
// }
// we should NEVER pull from gallery_secrets
// but we can push or pull from galleries
// also i mean we as in me

// galleries  >  movies [movieId, posterPath, rating]
