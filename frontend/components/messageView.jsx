/* globals Pusher */
var React = require('react');
var MessageList = require('./messageList');
var ClientActions = require('../actions/client_actions');
var MessageStore = require('../stores/message_store');

var MessageView = React.createClass({

  getInitialState: function() {
    return {
      messages: [] 
    };
  },

  componentWillMount: function() {
    this.pusher = new Pusher('620a5490a2480b3fe75a');
    this.chatRoom = this.pusher.subscribe('messages');

    // method of loading all past messages based on successful subscription to channel
    this.chatRoom.bind('pusher:subscription_succeeded', function(){
      console.log("SUBSCRIPTION WORKED");
      this.messageListener = MessageStore.addListener(this._messagesChanged);
      ClientActions.fetchAllMessages();
    }, this);
  },

  componentDidMount: function() {
    // this only needs to be called once, pusher will handle any new incoming messages through subscription
    this.chatRoom.bind('new_message', function(data){
        // this.setState({messages: this.state.messages.concat(data.message)});

        // trying to solve antipattern of removing 
        // ClientActions.createMessage(data.message);
        ClientActions.fetchAllMessages();
      }, this);

    // using refs to use "autofocus" feature because it is not supported in react through traditional html way
    this.refs.messageInput.focus();
  },

  _messagesChanged: function() {
    // only happens once
    this.setState({messages: MessageStore.all()});
    // this.messageListener.remove();
  },

  _onMessage: function(e){
    if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    // if the text is blank, do nothing
    if (text === "") return;

    var message = {
      text: text,
    };

    ClientActions.createMessage(message);
    input.value = "";
  },

  render: function() {
    return (
      <div>
        <MessageList messages={this.state.messages}  />
        <input placeholder="Type your message" onKeyPress={this._onMessage} ref="messageInput"/>
      </div>
    );
  }
});

module.exports = MessageView;