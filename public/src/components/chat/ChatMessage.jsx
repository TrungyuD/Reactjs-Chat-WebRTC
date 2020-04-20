/** @jsx React.DOM */
'use strict';

var ChatMessage = React.createClass({

  render: function () {
    var msg = this.props.message;
    var hours = msg.date.getHours();
    var minutes = msg.date.getMinutes();
    console.log('true or false', this.props.user);
    
    hours = (hours < 9) ? '0' + hours : hours;
    minutes = (minutes < 9) ? '0' + minutes : minutes;
    return (
      <div className={this.props.user ? "chat-message bg-success text-right" : "chat-message bg-white"}>
        <div className="message-time">[{ hours + ':' + minutes }]</div>
        <div className="message-author">&lt;{msg.author}&gt;</div>
        <div className="message-content">{msg.content}</div>
      </div>
    );
  }
});

