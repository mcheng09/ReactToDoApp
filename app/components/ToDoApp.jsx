var React =require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchToDo: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'Wash the dishes',
          completed: true
        }, {
          id: uuid(),
          text: 'Take out the garbage',
          completed: false
        }
      ]
    };
  },
  handleAddToDo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function(id) {
    var updatedToDos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updatedToDos
    });
  },
  handleSearchToDo: function(showCompleted, searchToDo) {
    this.setState({
      showCompleted: showCompleted,
      searchToDo: searchToDo.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <ToDoSearch onSearch={this.handleSearchToDo}/>
        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo handleAddToDo={this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
