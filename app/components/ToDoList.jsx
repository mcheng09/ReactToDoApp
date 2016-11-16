 var React = require('react');
 var {connect} = require('react-redux');
 import ToDo from 'ToDo';

 export var ToDoList = React.createClass({
   render: function() {
     var {todos} = this.props;
     var renderToDos = () => {
       if (todos.length === 0) {
         return (
           <p className="container__message">Nothing To Do</p>
         )
       }
       return todos.map((todo) => {
         return (
           <ToDo key={todo.id} {...todo}/>
         );
       });
     }
     return (
       <div>
          {renderToDos()}
       </div>
     )
   }
 });



export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(ToDoList);
