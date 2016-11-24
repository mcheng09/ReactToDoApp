var $ = require('jQuery');
module.exports = {
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
