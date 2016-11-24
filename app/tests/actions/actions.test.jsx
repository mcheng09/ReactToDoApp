import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'Anotha one!',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addToDo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = "My todo item";

    store.dispatch(actions.startAddToDo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 50000
    }];

    var action = {
      type: 'ADD_TODOS',
      todos: todos
    }

    var res = actions.addToDos(todos);

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {completed: false}
    };

    var res = actions.updateToDo(action.id, action.updates);

    expect(res).toEqual(action);

    describe('Tests with firebase todos', () => {
      var testToDoRef;

      beforeEach((done) => {
        var toDosRef = firebaseRef.child('todos');

        toDosRef.remove().then((done) => {
          testToDoRef = firebaseRef.child('todos').push();

          testToDoRef.set({
            text: 'Something to do',
            completed: false,
            createdAt: 24314
          })
        })
        .then(() => done())
        .catch(done)
      });
      afterEach((done) => {
        testToDoRef.remove().then(() => {
          done();
        })
      });

      it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
        const store = createMockStore({});
        const action = actions.startToggleToDo(testToDoRef.key, true);

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id: testToDoRef.key,
          });

          expect(mockActions[0].updates).toInclude({
            completed: true
          });

          expect(mockActions[0].updates.completedAt).toExist();

          done();
        }, done);
      });


      it('should populate todos and dispatch ADD_TODOS', (done) => {
        const store = createMockStore({});
        const action = actions.startAddToDos();

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toEqual(1);
          expect(mockActions[0].todos[0].text).toEqual('Something to do');

          done();
        }, done)
      })
    });
  });
});
