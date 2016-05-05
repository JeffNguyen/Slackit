var React = require('react');

var MessageList = React.createClass({
  // window.current_user information is all strings
  componentWillMount: function() {
    this.sign_in_count = window.current_user.sign_in_count;
  },
  
  render: function() {
    var list;

    // will handle tutorial part 

    // if (this.sign_in_count === '1') {
    //   list = 
    //     <li>
    //       <b>Bot</b>: Hello, you are a first time user. Here is a tutorial!
    //     </li>
    // } else {
    //   list = this.props.messages.map(function(message){
    //     return  (
    //       <li key={message.id}>
    //         <b>{message.username}</b>: {message.text}
    //       </li>
    //     );
    //   });
    // }

    list = this.props.messages.map(function(message){
      return  (
        <div key={message.id} className='message-item'>
          <b>{message.email}</b>: {message.text}
        </div>
      );
    }); 

    return (
      <div id="chat">
        {list}
      </div>
    );
  }

});

module.exports = MessageList;