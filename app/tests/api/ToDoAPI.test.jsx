var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('setToDos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      ToDoAPI.setToDos(todos);

      var actualToDos = JSON.parse(localStorage.getItem('todos'));

      expect(actualToDos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badToDos = {a: 'b'};
      ToDoAPI.setToDos(badToDos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getToDos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualToDos = ToDoAPI.getToDos();
      expect(actualToDos).toEqual([]);
    });

    it('should return todo if valid array is localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual(todos);
    });
  });
});
