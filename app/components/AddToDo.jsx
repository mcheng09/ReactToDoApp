var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
  handleAddToDo: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var toDos = this.refs.todos.value;

    if (toDos.length > 0) {
      this.refs.todos.value = '';
      dispatch(actions.addToDo(toDos));
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

export default connect()(AddToDo);
