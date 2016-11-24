 var React = require('react');
 var {connect} = require('react-redux');
 import ToDo from 'ToDo';
 var ToDoAPI = require('ToDoAPI');

 export var ToDoList = React.createClass({
   render: function() {
     var {todos, showCompleted, searchText} = this.props;
     var renderToDos = () => {
       var filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText)

       if (filteredToDos.length === 0) {
         return (
           <p className="container__message">Nothing To Do</p>
         )
       }

       return filteredToDos.map((todo) => {
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
    return state;
  }
)(ToDoList);
