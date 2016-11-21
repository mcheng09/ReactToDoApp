import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase/index';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};

export var addToDo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  };
};

export var startAddToDo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addToDo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addToDos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos
  }
};

// toggleToDo(id) TOGGLE_TODO
export var toggleToDo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id: id
  };
};
