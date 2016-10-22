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
  }
};
