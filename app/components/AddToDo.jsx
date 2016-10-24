var React = require('react');

var AddToDo = React.createClass({
  handleAddToDo: function(e) {
    e.preventDefault();
    var toDos = this.refs.todos.value;

    if (toDos.length > 0) {
      this.refs.todos.value = '';
      this.props.handleAddToDo(toDos);
    }
    else {
      this.refs.todos.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleAddToDo} >
          <input type="text" ref="todos" placeholder="Add To Do Here"/>
          <button className="button primary expanded">Add To Do</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
