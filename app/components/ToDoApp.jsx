var React =require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <ToDoList todos={todos} />
        <AddToDo handleAddToDo={this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
