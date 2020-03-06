/**
 * <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.10.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.10.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
 */
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnD5w80EokvlQLfRYWzOExt_o_y0GfnLE",
    authDomain: "simplecrud-d777b.firebaseapp.com",
    databaseURL: "https://simplecrud-d777b.firebaseio.com",
    projectId: "simplecrud-d777b",
    storageBucket: "simplecrud-d777b.appspot.com",
    messagingSenderId: "876179655534",
    appId: "1:876179655534:web:40c79984c732ce314ecf7f",
    measurementId: "G-1FJMDFRSZ7"
  };
  //   firebase.analytics();
  // Initialize Firebase
  
const firebaseapp = firebase.initializeApp(firebaseConfig);

firebaseapp.firestore().settings({timestampsInSnapshots: true});

export default firebaseapp.firestore();