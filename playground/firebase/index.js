import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCiQTt1wg5w9rnONipSAHJCQdVb_aTO5Rs",
  authDomain: "react-todo-app-c15dc.firebaseapp.com",
  databaseURL: "https://react-todo-app-c15dc.firebaseio.com",
  storageBucket: "react-todo-app-c15dc.appspot.com",
  messagingSenderId: "692640966369"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'To Do App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Mike',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
