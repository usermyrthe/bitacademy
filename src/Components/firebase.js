import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3IIIBCJz57f5sOA6ZHHqqU4NAS6u6duQ",
  authDomain: "bit-academy-18e06.firebaseapp.com",
  projectId: "bit-academy-18e06",
  storageBucket: "bit-academy-18e06.appspot.com",
  messagingSenderId: "378306735727",
  appId: "1:378306735727:web:0576c83e47799fed76279a"
});

var db = firebaseApp.firestore();

export { db };

