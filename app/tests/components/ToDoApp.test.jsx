var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp',() => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add to do to the todos state on handleAddToDo', () => {
    var toDo = 'test text';
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    toDoApp.setState({todos: []});
    toDoApp.handleAddToDo(toDo);

    expect(toDoApp.state.todos[0].text).toBe(toDo);
  });

  it('should toggle completed value when handleToggle called', () => {
    var toDoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: [toDoData]});

    expect(toDoApp.state.todos[0].completed).toBe(false);
    toDoApp.handleToggle(11);
    expect(toDoApp.state.todos[0].completed).toBe(true);
  })
});
