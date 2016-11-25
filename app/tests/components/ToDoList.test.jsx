var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList'
import ConnectedToDo, {ToDo} from 'ToDo';

describe('ToDoList',() => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do Something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Check mail',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    var store = configure({
      todos: todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo)

    expect(toDosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(toDoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
