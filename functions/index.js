const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const START_ELO = 550;
exports.onMovieAdded = functions.firestore
.document('movies/{movieId}')
.onCreate((snapshot, context) => {
    const movieId = context.params.movieId;
    // console.log(`hello ${movieId}`)
    // console.log(`snapshot is : ${snapshot}`)

    // const testvar= snapshot.val()
    // const var2 = testvar.title
    return snapshot.ref.update({score: START_ELO})
})

const K = 100;
const RATING_SCALER = 400;

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.updateElo = functions.https.onCall((data, context) =>{
    // console.log(data)
    const winnerId = data.winnerId;
    const loserId = data.loserId;
    // console.log(winnerId + " and " + loserId)

    const docRefW = db.collection("movies").doc(winnerId)
    const docRefL = db.collection("movies").doc(loserId)

    let scoreW;
    let newScoreL;
    docRefW.get()
    .then((doc)=>{
        // console.log(doc)
        scoreW = doc.data().score;
        // console.log(scoreW)
        return docRefL.get()
    }).then((doc2)=>{
        // console.log(doc2)
        const scoreL = doc2.data().score;
        // console.log(scoreW + " " + scoreL)
        const expectedW = 1 / (1 + (Math.pow(10,scoreL - scoreW)/RATING_SCALER))
        const scoreChange = Math.ceil(K*(1-expectedW))
        const newScoreW = scoreW + scoreChange;
        newScoreL = scoreL - scoreChange;
        return db.doc(`movies/${winnerId}`).update({score:newScoreW})
    }).
    then(()=>{
        return db.doc(`movies/${loserId}`).update({score:newScoreL})
    })
    .catch(err=>console.log(err))
})