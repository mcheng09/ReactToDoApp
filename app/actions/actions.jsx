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

export var addToDo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text
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
