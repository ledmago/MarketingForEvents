import * as firebase from 'firebase';
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBedGs1s7xgB_RbPInDM0q7SUuFLj9nbds",
    authDomain: "mfexx-86e9e.firebaseapp.com",
    databaseURL: "https://mfexx-86e9e.firebaseio.com",
    projectId: "mfexx-86e9e",
    storageBucket: "mfexx-86e9e.appspot.com",
    messagingSenderId: "624913189406",
    appId: "1:624913189406:web:553f7d2a333d65bdb17c0f",
    measurementId: "G-6PGCEY2MLS"
};


firebase.initializeApp(firebaseConfig);
export default firebase;
