var React =require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchToDo: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Wash the dishes'
        }, {
          id: 4,
          text: 'Take out the garbage'
        }
      ]
    };
  },
  handleAddToDo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearchToDo: function(showCompleted, searchToDo) {
    this.setState({
      showCompleted: showCompleted,
      searchToDo: searchToDo.toLowerCase();
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
