import * as firebase from "firebase";

const DB_CONFIG = {
    apiKey: "AIzaSyCE2L3EZL8hMEDuQctIOV2SGPk1iubZLwE",
    authDomain: "react-mypr.firebaseapp.com",
    databaseURL: "https://react-mypr.firebaseio.com",
    projectId: "react-mypr",
    storageBucket: "react-mypr.appspot.com",
    messagingSenderId: "812121886088",
    appId: "1:812121886088:web:6f7f86741df3372d39fe3d",
    measurementId: "G-YSQS5X91YS"
  };

  const myapp = firebase.initializeApp(DB_CONFIG); 
  //const mydatabase = myapp.database().ref().child()


  export default firebase