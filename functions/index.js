const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const START_ELO = 500;
exports.onMovieAdded = functions.firestore
.document('movies/{movieId}')
.onCreate((snapshot, context) => {
    const movieId = context.params.movieId;
    console.log(`hello ${movieId}`)
    console.log(`snapshot is : ${snapshot}`)

    // const testvar= snapshot.val()
    // const var2 = testvar.title
    return snapshot.ref.update({score: START_ELO})
})

exports.updateElo = functions.https.onCall((data, context) =>{
    
})