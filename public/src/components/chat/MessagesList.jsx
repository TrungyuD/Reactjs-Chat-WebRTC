/** @jsx React.DOM */

'use strict';

var MessagesList = React.createClass({

  getInitialState: function () {
    return { messages: [] };
  },

  addMessage: function (message) {
    var messages = this.state.messages;
    var container = this.refs.messageContainer.getDOMNode();
    messages.push(message);
    this.setState({ messages: messages });
    // Smart scrolling - when the user is
    // scrolled a little we don't want to return him back
    if (container.scrollHeight -
        (container.scrollTop + container.offsetHeight) >= 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  },

  componentDidUpdate: function () {
    if (this.scrolled) {
      return;
    }
    var container = this.refs.messageContainer.getDOMNode();
    container.scrollTop = container.scrollHeight;
  },

  render: function () {
    console.log('test message',this.state.messages);
    console.log('username', this.props.username);
    
    var messages;
    var user = this.props.username;
    console.log(user);
    messages = this.state.messages.map(function (m) {
      console.log("m", m.author);
      return (
        <ChatMessage message={m} user={m.author === user ? true : false}></ChatMessage>
      );
    });
    if (!messages.length) {
      messages = <div className="chat-no-messages">No messages</div>;
    }
    return (
      <div ref="messageContainer" className="chat-messages col-xs-9">
        {messages}
      </div>
    );
  }
});

