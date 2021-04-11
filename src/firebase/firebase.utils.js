import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKdP2J7k_1qasSSKTUT2nsdCD2GASPqBA",
    authDomain: "crown-db-17210.firebaseapp.com",
    projectId: "crown-db-17210",
    storageBucket: "crown-db-17210.appspot.com",
    messagingSenderId: "225120855619",
    appId: "1:225120855619:web:06f9401a0a5a49dbe396f6",
    measurementId: "G-VZ65WSXR2G"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
