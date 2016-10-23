var $ = require('jQuery');
module.exports = {
  setToDos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getToDos: function() {
    var stringToDos = localStorage.getItem('todos');
    var todos = [];

    try {
       todos = JSON.parse(stringToDos)
    }
    catch (e) {

    }

    return $.isArray(todos) ? todos : [];

    // if ($.isArray(todos)) {
    //   return todos;
    // }
    // else {
    //   return [];
    // }
  },
  filterToDos: function(todos, showCompleted, searchToDo) {
    var filteredToDos = todos;

    //Filter By showCompleted
    filteredToDos = filteredToDos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //Filter By searchToDo
    filteredToDos = filteredToDos.filter((todo) => {
      var toDo = todo.text.toLowerCase();
      return searchToDo.length === 0 || toDo.indexOf(searchToDo) > -1;
    });

    //Sort todos with non-completed first
    filteredToDos.sort((a, b) => {
      if (a.completed && b.completed) {
        return -1;
      }
      else if (a.completed && !b.completed){
        return 1;
      }
      else {
        return 0;
      }
    })

    return filteredToDos;
  }
};
