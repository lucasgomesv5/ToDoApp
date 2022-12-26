import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCGzW04ObB986UtRTP18V6N1rD1DTY40cY",
    authDomain: "todoapp-1b35c.firebaseapp.com",
    projectId: "todoapp-1b35c",
    storageBucket: "todoapp-1b35c.appspot.com",
    messagingSenderId: "366104283447",
    appId: "1:366104283447:web:2b6da00a870ed208d732b2",
    measurementId: "G-TTZ173Y07Y"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
export default firebase;