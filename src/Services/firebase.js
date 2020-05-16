import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAEoW0dWLVPzpnSg705r1ELwMFF4o3i2Z0",
    authDomain: "tech-challenge-aa776.firebaseapp.com",
    databaseURL: "https://tech-challenge-aa776.firebaseio.com",
    projectId: "tech-challenge-aa776",
    storageBucket: "tech-challenge-aa776.appspot.com",
    messagingSenderId: "550263015969",
    appId: "1:550263015969:web:d79fad147e6c29391bb160",
    measurementId: "G-FW9KGMX90W"
  };
//initialize
firebase.initializeApp(firebaseConfig)
export default firebase;