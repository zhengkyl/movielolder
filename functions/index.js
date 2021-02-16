const functions = require("firebase-functions");
const server = require("./src/server");
const api = functions
  .runWith({ memory: "2GB", timeoutSeconds: 120 })
  .https.onRequest(server);

module.exports={
  api
}
//TODO move/redo everything below
// const admin = require("firebase-admin");
// const fetch = require("node-fetch");

// const firestore = require("./src/firestore");
// // admin.initializeApp();

// // const firestore = admin.firestore();
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });

// const TMDB_API_SEARCH_BASE =
//   "https://api.themoviedb.org/3/search/movie?api_key=";
// const TMDB_API_KEY = functions.config().tmdb.key;

// exports.getMovieSearchResults = functions.https.onCall(
//   async (data, context) => {
//     try {
//       //   const { galleryId, query } = data;
//       console.log("0");
//       const searchUrl = `${TMDB_API_SEARCH_BASE}${TMDB_API_KEY}&query=${data.query}`;
//       const response = await (await fetch(searchUrl)).json();
//       console.log("1");
//       const movieDocRefs = response["results"].map(
//         (entry) => `galleries/${data.galleryId}/movies/${entry["id"]}`
//       );
//       //TODO replace with where n
//       let existingMovies = await firestore.getAll(...movieDocRefs);
//       existingMovies = existingMovies.forEach((m) => m.data().id);
//       console.log("2");
//       const movieList = response["results"].map((entry) => {
//         const added = existingMovies.includes(entry["id"]);
//         if (added) {
//           // THIS ONLY WORKS IF EVERYTHING IS RETURNED IN THE SAME ORDER
//           existingMovies.shift();
//         }
//         return {
//           id: `${entry["id"]}`, //return as string
//           title: entry["title"],
//           summary: entry["overview"],
//           posterPath: entry["poster_path"],
//           added: added,
//         };
//       });
//       return { movieList: movieList };
//     } catch (err) {
//       return { movieList: [] };
//     }
//   }
// );

// const START_RATING = 550;
// exports.onMovieAdded = functions.firestore
//   .document(`galleries/{galleryId}/movies/{movieId}`)
//   .onCreate((snapshot, context) => {
//     //context.params.movieId etc
//     return snapshot.ref.update({ rating: START_RATING });
//   });

// const K = 100;
// const RATING_SCALER = 400;

// // TODO REDO WITH TRANSACTIONS!!!
// exports.updateElo = functions.https.onCall(async (data, context) => {
//   // console.log(data)
//   const winnerId = data.winnerId;
//   const loserId = data.loserId;
//   // console.log(winnerId + " and " + loserId)
//   const db = await admin.firestore();
//   const docRefW = db.collection("movies").doc(winnerId);
//   const docRefL = db.collection("movies").doc(loserId);

//   let scoreW;
//   let newScoreL;
//   docRefW
//     .get()
//     .then((doc) => {
//       // console.log(doc)
//       scoreW = doc.data().score;
//       // console.log(scoreW)
//       return docRefL.get();
//     })
//     .then((doc2) => {
//       // console.log(doc2)
//       const scoreL = doc2.data().score;
//       // console.log(scoreW + " " + scoreL)
//       const expectedW = 1 / (1 + Math.pow(10, scoreL - scoreW) / RATING_SCALER);
//       const scoreChange = Math.ceil(K * (1 - expectedW));
//       const newScoreW = scoreW + scoreChange;
//       newScoreL = scoreL - scoreChange;
//       return db.doc(`movies/${winnerId}`).update({ score: newScoreW });
//     })
//     .then(() => {
//       return db.doc(`movies/${loserId}`).update({ score: newScoreL });
//     })
//     .catch((err) => console.log(err));
// });
