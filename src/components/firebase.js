import * as firebase from "firebase/app"
import "firebase/firestore";


// firebase.initializeApp(firebaseConfig)

export default firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig)
