var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should call onAddToDo prop with valid data', () => {
    var toDo = 'Check mail'
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo handleAddToDo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todos.value = toDo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(toDo);
  });

  it('it should not call onAddToDo prop when invalid data', () => {
    var toDo = '';
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo handleAddToDo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todos.value = toDo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(toDo);
  });
});
