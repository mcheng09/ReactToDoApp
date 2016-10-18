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
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Wash the dishes'
        }, {
          id: uuid(),
          text: 'Take out the garbage'
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
          text: text
        }
      ]
    })
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
        <ToDoList todos={todos} />
        <AddToDo handleAddToDo={this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
