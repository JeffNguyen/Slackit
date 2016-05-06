/* globals Pusher */
var React = require('react');
var MessageList = require('./messageList');
var ClientActions = require('../actions/client_actions');
var MessageStore = require('../stores/message_store');

// A user listening to other messages in the channel will only render once - in the chatroom.bind
// where fetchAllMessages is called - it will always fetch the most up to date messages

// A user that is creating a message will re render its component twice - one when the message
// gets created and the Store emits changed and also since there is a new message - the 
// chatroom.bind will also call fetchAllMessages
var MessageView = React.createClass({

  getInitialState: function() {
    return {
      messages: []
    };
  },

  componentWillMount: function() {
    this.pusher = new Pusher('620a5490a2480b3fe75a');
    this.chatRoom = this.pusher.subscribe('messages');

    // loading all past messages based on successful subscription to channel
    this.chatRoom.bind('pusher:subscription_succeeded', function(){
      this.messageListener = MessageStore.addListener(this._messagesChanged);
      ClientActions.fetchAllMessages(parseInt(this.props.channelId));
    }, this);
  },

  componentDidMount: function() {
    this.chatRoom.bind('new_message', function(data){
      ClientActions.fetchAllMessages(parseInt(this.props.channelId));
    }, this);

    // using refs to use "autofocus" feature because it is not supported in react through traditional html way
    this.refs.messageInput.focus();
  },

  _messagesChanged: function() {
    this.setState({messages: MessageStore.all()}, function(){
      $('#chat').scrollTop($('#chat')[0].scrollHeight);
    });
    /*need a setTimeout because when grouping messages together based on the same user/time
      the jquery scroll scrolls down but not when all the messages are there */
    var chat = document.getElementById('chat');
    // if (chat.clientHeight <  chat.scrollHeight){
    //   console.log('Overflowed');
    //   setTimeout(function(){
    //     $('#chat').scrollTop($('#chat')[0].scrollHeight);
    //   }, 100);
    // } else {
    //   console.log('No overflow');
    // }
    // $('#chat').scrollTop($('#chat')[0].scrollHeight);
  },

  _onMessage: function(e){
    if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    // if the text is blank, do nothing
    if (text === "") return;

    var message = {
      text: text,
      channel_id: parseInt(this.props.channelId)
    };

    ClientActions.createMessage(message);
    input.value = "";
  },

  render: function() {
    return (
      <div className='main'>
        <MessageList messages={this.state.messages} /> 
        <input placeholder="" onKeyPress={this._onMessage} ref="messageInput" className='input-message'/>
      </div>
    );
  }
});


module.exports = MessageView;