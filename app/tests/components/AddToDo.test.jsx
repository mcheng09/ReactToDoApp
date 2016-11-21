var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    var toDo = 'Check mail';
    var action = actions.startAddToDo(toDo);
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todos.value = toDo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO  when invalid todo text', () => {
    var toDo = '';
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todos.value = toDo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(toDo);
  });
});
