var React = require('react');

var MessageList = React.createClass({

  render: function() {
    var list = this.props.messages.map(function(message){
      return  (
        <li key={message.id}>
          <b>{message.username}</b>: {message.text}
        </li>
      );
    });
    return (
      <ul className="chat">
        {list}
      </ul>
    );
  }

});

module.exports = MessageList;