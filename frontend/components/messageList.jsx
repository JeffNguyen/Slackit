var React = require('react');

var MessageList = React.createClass({

  componentWillMount: function() {
    this.sign_in_count = window.current_user.sign_in_count;
  },

  render: function() {
    var list;
    // window.current_user information is all strings
    if (this.sign_in_count === '1') {
      list = 
        <li>
          <b>Bot</b>: Hello, you are a first time user. Here is a tutorial!
        </li>
    } else {
      list = this.props.messages.map(function(message){
        return  (
          <li key={message.id}>
            <b>{message.username}</b>: {message.text}
          </li>
        );
      });
    }

    return (
      <ul className="chat">
        {list}
      </ul>
    );
  }

});

module.exports = MessageList;