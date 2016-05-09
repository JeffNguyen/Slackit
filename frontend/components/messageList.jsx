var React = require('react');

var MessageList = React.createClass({
  
  render: function() {
    var list;

    var prevMessage;
    list = this.props.messages.map(function(message, index){

      if (index === 0){
        prevMessage = message;
        var user_id = message.user_id;
        var picture_index = (user_id % 16) + 1; 
        var picture_string = picture_index.toString();
        var url = 'avatars/' + picture_string + '.png';
        return  (
          <div key={message.id} className='message-item'>
            <div> <img className="avatar" src={url} />
                  {message.username} &nbsp;
                  <div className='message-time'>{message.time}</div>
            </div>
            <div className='message-text'>{message.text}</div>
          </div>
        );
      } else {
        // if previous message time is equal to current message time and previous message user is equal to current message user
        if (prevMessage.time === message.time && prevMessage.email === message.email){
          return  (
            <div key={message.id} className='message-item'>
              <div className='message-text'>{message.text}</div>
            </div>
          );          
        }
        else {
          prevMessage = message;
          var user_id = message.user_id;
          var picture_index = (user_id % 16) + 1; 
          var picture_string = picture_index.toString();
          var url = 'avatars/' + picture_string + '.png';
          return  (
            <div key={message.id} className='message-item'>
              <div> <img img className="avatar" src={url} />
                    {message.username} &nbsp;
                    <div className='message-time'>{message.time}</div>
              </div>
              <div className='message-text'>{message.text}</div>
            </div>
          );          
        }
      }
    }); 


    return (
      <div id="chat">
        {list}
      </div>
    );
  }

});

module.exports = MessageList;