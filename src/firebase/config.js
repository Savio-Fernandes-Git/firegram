import firebase from 'firebase/app';
import 'firebase/storage'; //to store images
import 'firebase/firestore'; //database

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDk-co7RIbLGyRaPoFUygdBxobe9TRc8SM",
    authDomain: "savio-firegram.firebaseapp.com",
    projectId: "savio-firegram",
    storageBucket: "savio-firegram.appspot.com",
    messagingSenderId: "346919125860",
    appId: "1:346919125860:web:1c3a4727d8c0e6a44d3071"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initializing storage and firestore service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//need to initialize these 2 on our firebase project dashboard

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };