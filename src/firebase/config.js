import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzpAOZHjW2M9_jZ7pC2ChuxBXmO3Ulfz8",
  authDomain: "dojo-blogs2023.firebaseapp.com",
  projectId: "dojo-blogs2023",
  storageBucket: "dojo-blogs2023.appspot.com",
  messagingSenderId: "917364867966",
  appId: "1:917364867966:web:7fa687d8399ce5cbc9e92f",
};

//init firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
//init firestroe
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
