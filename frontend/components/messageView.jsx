/* globals Pusher */
var React = require('react');
var MessageList = require('./messageList');
var ClientActions = require('../actions/client_actions');
var ChannelStore = require('../stores/channel_store');
var MessageStore = require('../stores/message_store');

var MessageView = React.createClass({

  getInitialState: function() {
    // used this.props.channelId which was passed down from the parent component which knows the url identifier of the channel
    return {
      messages: []
    };
  },

  componentWillMount: function() {
    this.pusher = new Pusher('620a5490a2480b3fe75a');
    this.chatRoom = this.pusher.subscribe('messages');

    // method of loading all past messages based on successful subscription to channel
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

  componentWillReceiveProps: function() {
    // to handle receiveing props through router
    // ClientActions.fetchAllMessages(this.props.channelId);
  },

  _messagesChanged: function() {
    this.setState({messages: MessageStore.all()});
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
        <input placeholder="Type your message" onKeyPress={this._onMessage} ref="messageInput" className='input-message'/>
      </div>
    );
  }
});

module.exports = MessageView;