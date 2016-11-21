import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCiQTt1wg5w9rnONipSAHJCQdVb_aTO5Rs",
    authDomain: "react-todo-app-c15dc.firebaseapp.com",
    databaseURL: "https://react-todo-app-c15dc.firebaseio.com",
    storageBucket: "react-todo-app-c15dc.appspot.com",
    messagingSenderId: "692640966369"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
