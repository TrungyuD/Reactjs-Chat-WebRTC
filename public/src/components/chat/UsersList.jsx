/** @jsx React.DOM */
'use strict';

var UsersList = React.createClass({
  render: function () {
    var users = this.props.users.map(function (user) {
      return <div className="chat-user">{user}</div>;
    });
    // var users = this.props.users;
    return (
      <div className="users-list col-xs-3">
        {users}
      </div>
    );
  }
});
