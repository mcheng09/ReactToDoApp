var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {ToDo} from 'ToDo';

describe('ToDo',() => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var toDoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var action = actions.startToggleToDo(toDoData.id, !toDoData.completed);

    var spy = expect.createSpy();
    var toDo = TestUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
