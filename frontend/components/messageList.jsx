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
    var prevMessage;
    // list = this.props.messages.map(function(message, index){
    //   if (index === 0){
    //     prevMessage = message
    //     return  (
    //       <div key={message.id} className='message-item'>
    //         <div>{message.username} <div className='message-time'>{message.time}</div></div>
    //         <div className='message-text'>{message.text}</div>
    //       </div>
    //     );
    //   } else {
    //     // if previous message time is equal to current message time and previous message user is equal to current message user
    //     if (prevMessage.time === message.time && prevMessage.email === message.email){
    //       return  (
    //         <div key={message.id} className='message-item'>
    //           <div className='message-text'>{message.text}</div>
    //         </div>
    //       );          
    //     }
    //     else {
    //       prevMessage = message;
    //       return  (
    //         <div key={message.id} className='message-item'>
    //           <div>{message.username} <div className='message-time'>{message.time}</div></div>
    //           <div className='message-text'>{message.text}</div>
    //         </div>
    //       );          
    //     }
    //   }
    // }); 

    list = this.props.messages.map(function(message, index){
          return  (
            <div key={message.id} className='message-item'>
              <div>{message.username} <div className='message-time'>{message.time}</div></div>
              <div className='message-text'>{message.text}</div>
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