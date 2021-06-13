import firebase from "firebase"

var firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCdou3RkYQe-NgN0YmXGVwUNeUBKPNW1so",
    authDomain: "itssid-76c3f.firebaseapp.com",
    projectId: "itssid-76c3f",
    storageBucket: "itssid-76c3f.appspot.com",
    messagingSenderId: "975626588487",
    appId: "1:975626588487:web:53141801d2c3232f553c62",
    measurementId: "G-PPL014N2QM"
  })

  var db = firebaseApp.firestore()

  export {db}