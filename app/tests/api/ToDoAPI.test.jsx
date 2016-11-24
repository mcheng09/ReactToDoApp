var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('filterToDos', () => {
    var todos = [{
      id: 1,
      text: "Some random text",
      completed: true
    }, {
      id: 2,
      text: "Anotha one!",
      completed: false
    },{
      id: 3,
      text: "And Anotha One!",
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, '');

      expect(filteredToDos.length).toBe(3);
    });

    it('should return non-completed items if showCompleted is false', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, false, '');

      expect(filteredToDos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true,'');
      expect(filteredToDos[0].completed).toBe(false);
    });

    it('should filter todos by searchToDo', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, 'anotha');
      expect(filteredToDos.length).toBe(2);
    });

    it('should return all todos if searchToDo is empty', () => {
      var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
      expect(filteredToDos.length).toBe(3);
    });
  });
});
