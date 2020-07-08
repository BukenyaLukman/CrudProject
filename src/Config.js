import* as firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true}


var firebaseConfig = {
    apiKey: "AIzaSyAeS4Z2canCb6qgOPQ8YQy4swQjNXSc0_I",
    authDomain: "crudproject-e4a25.firebaseapp.com",
    databaseURL: "https://crudproject-e4a25.firebaseio.com",
    projectId: "crudproject-e4a25",
    storageBucket: "crudproject-e4a25.appspot.com",
    messagingSenderId: "346925927307",
    appId: "1:346925927307:web:5891cedb53a8fa7654bd8e",
    measurementId: "G-QQDN0R99M5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase;