var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var ToDoSearch = React.createClass({
  render: function() {
    var {dispatch, showCompleted, searchToDo} = this.props;

    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchToDo" placeholder="Search To Do" value={searchToDo} onChange={() => {
              var searchToDo = this.refs.searchToDo.value;
              dispatch(actions.setSearchText(searchToDo));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show Completed To Do
          </label>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchToDo: state.searchToDo
    }
  }
)(ToDoSearch);
