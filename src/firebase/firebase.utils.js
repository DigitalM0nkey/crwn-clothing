import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAqenPhJk1QgzPtxLRd-__rWVRY7NM7Hx4",
  authDomain: "crwn-db-6e18c.firebaseapp.com",
  databaseURL: "https://crwn-db-6e18c.firebaseio.com",
  projectId: "crwn-db-6e18c",
  storageBucket: "crwn-db-6e18c.appspot.com",
  messagingSenderId: "176133146533",
  appId: "1:176133146533:web:30b7f0b5777351c7f84a4c",
  measurementId: "G-N5G2G6514R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
