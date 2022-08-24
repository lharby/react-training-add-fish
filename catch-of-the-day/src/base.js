import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmCvLelXeyo2bD_teN6EYu02yu0CQpbmg",
    authDomain: "catch-of-the-day-8b25c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "catch-of-the-day-8b25c",
    storageBucket: "catch-of-the-day-8b25c.appspot.com",
    messagingSenderId: "576431247952",
    appId: "1:576431247952:web:81fae8acef9a6c7389b755",
    measurementId: "G-Z0XZPQ7YQJ",
    databaseURL: "https://catch-of-the-day-8b25c-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;


//https://catch-of-the-day-8b25c-default-rtdb.europe-west1.firebasedatabase.app