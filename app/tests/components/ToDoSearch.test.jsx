var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {ToDoSearch} from 'ToDoSearch';

describe('ToDoSearch', () => {
  it('should exist', () => {
    expect(ToDoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchToDo = 'Dog';
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: searchToDo
    }
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);

    toDoSearch.refs.searchToDo.value = searchToDo;
    TestUtils.Simulate.change(toDoSearch.refs.searchToDo);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);

    toDoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
