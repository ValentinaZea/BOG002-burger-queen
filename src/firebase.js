import firebase from "firebase/app";
import "firebase/firestore";

// DB NOMADAS
// const firebaseConfig = {
//   apiKey: "AIzaSyCNJzDnQucoug5jUE-5pEodaacilcQTyAw",
//   authDomain: "nomadas-3c02d.firebaseapp.com",
//   databaseURL: "https://nomadas-3c02d-default-rtdb.firebaseio.com",
//   projectId: "nomadas-3c02d",
//   storageBucket: "nomadas-3c02d.appspot.com",
//   messagingSenderId: "189718883297",
//   appId: "1:189718883297:web:c200b22cbcb8c28c4a80a0",
//   measurementId: "G-1KW71LWQJS"
// };
const firebaseConfig = {    
    apiKey: "AIzaSyCtayVDG8sSCAJhIyYsuKZ112c6VAK9AuI",
    authDomain: "burger-queen-5877c.firebaseapp.com",
    projectId: "burger-queen-5877c",
    storageBucket: "burger-queen-5877c.appspot.com",
    messagingSenderId: "556442723891",
    appId: "1:556442723891:web:bec0e328e239d51ccca546",
    measurementId: "G-RVLDC95Y5Q"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
export default db;
// firebase.analytics();