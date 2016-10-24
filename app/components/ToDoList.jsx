 var React = require('react');
 var ToDo = require('ToDo');

 var ToDoList = React.createClass({
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
           <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = ToDoList;
