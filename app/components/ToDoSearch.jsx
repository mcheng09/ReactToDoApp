var React = require('react');

var ToDoSearch = React.createClass({
  handleSearchToDo: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchToDo = this.refs.searchToDo.value;

    this.props.onSearch(showCompleted, searchToDo);
  },
  render: function() {
    return(
      <div>
        <div>
          <input type="search" ref="searchToDo" placeholder="Search To Do" onChange={this.handleSearchToDo}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearchToDo}/>
            Show Completed To Do
          </label>
        </div>
      </div>
    )
  }
});

module.exports = ToDoSearch;
