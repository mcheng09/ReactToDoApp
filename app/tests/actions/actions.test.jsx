var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Random text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'More random text!'
    };
    var res = actions.addToDo(action.text);

    expect(res).toEqual(action);
  });

  it('should generation toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 4
    };

    var res = actions.toggleToDo(action.id);

    expect(res).toEqual(action);
  });
});
