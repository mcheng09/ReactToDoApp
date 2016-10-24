var React =require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchToDo: '',
      todos: ToDoAPI.getToDos()
    };
  },
  componentDidUpdate: function() {
    ToDoAPI.setToDos(this.state.todos);
  },
  handleAddToDo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleToggle: function(id) {
    var updatedToDos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
    var {todos, showCompleted, searchToDo} = this.state;
    var filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchToDo);

    return (
      <div>
        <h1 className="page-title">To Do App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearchToDo}/>
              <ToDoList todos={filteredToDos} onToggle={this.handleToggle}/>
              <AddToDo handleAddToDo={this.handleAddToDo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
