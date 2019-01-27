import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBCelN-L-co7pxZ6TvGIms5iti300PE9CA",
    authDomain: "tasker-2d87e.firebaseapp.com",
    databaseURL: "https://tasker-2d87e.firebaseio.com",
    projectId: "tasker-2d87e",
    storageBucket: "tasker-2d87e.appspot.com",
    messagingSenderId: "120131602570"
};

firebase.initializeApp(config);
var db = firebase.firestore();
var auth = firebase.auth();

export { db, auth };
