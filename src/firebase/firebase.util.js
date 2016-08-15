import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication

const config = {
    apiKey: "AIzaSyA4r9j71Td_6iOeB02xTM9ZXegzJQFs-ck",
    authDomain: "crwn-db-aa552.firebaseapp.com",
    databaseURL: "https://crwn-db-aa552.firebaseio.com",
    projectId: "crwn-db-aa552",
    storageBucket: "crwn-db-aa552.appspot.com",
    messagingSenderId: "7727841343",
    appId: "1:7727841343:web:841c98c0e1d413400cf88a",
    measurementId: "G-4YM1MNHWQK"
  };

  firebase.initializeApp(config)


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;