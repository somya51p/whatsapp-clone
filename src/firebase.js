import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtcff3aMIUmwWHaa9cX3i69PBHI-3kTNk",
    authDomain: "whats-app-clone-1fb8b.firebaseapp.com",
    databaseURL: "https://whats-app-clone-1fb8b.firebaseio.com",
    projectId: "whats-app-clone-1fb8b",
    storageBucket: "whats-app-clone-1fb8b.appspot.com",
    messagingSenderId: "512255490558",
    appId: "1:512255490558:web:b32c71383ecc6babc6e8af",
    measurementId: "G-FSB7VNM7G0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;