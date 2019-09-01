import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDvRnPmHM1wMZqXlY21J-pXgdZepFKWasE",
    authDomain: "notemanager-16c60.firebaseapp.com",
    databaseURL: "https://notemanager-16c60.firebaseio.com",
    projectId: "notemanager-16c60",
    storageBucket: "",
    messagingSenderId: "150043777385",
    appId: "1:150043777385:web:f30953cf81eca002"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const noteData = firebase.database().ref('dataForNote');