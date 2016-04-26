var React = require('react');

var MessageList = React.createClass({

  render: function() {
    var list = this.props.messages.map(function(message){
      return  (
        <li>
          <b>{message.username}</b>
          <p>{message.text}</p>
        </li>
      );
    });
    return (
      <ul>
        {list}
      </ul>
    );
  }

});

module.exports = MessageList;