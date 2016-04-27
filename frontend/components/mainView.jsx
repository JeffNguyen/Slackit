var React = require('react');
var MessageList = require('./messageList');
var ClientActions = require('../actions/client_actions');
var MessageStore = require('../stores/message_store');

var MainView = React.createClass({

  getInitialState: function() {
    return {
      messages: [] 
    };
  },

  componentWillMount: function() {
    this.pusher = new Pusher('620a5490a2480b3fe75a');
    this.chatRoom = this.pusher.subscribe('messages');
  },

  componentDidMount: function() {
  // WILL ADD LISTENER HERE IN FUTURE BASED ON IF ENTER WAS PRESSED USING STORE

  this.chatRoom.bind('new_message', function(data){
      console.log(data.message);
      this.setState({messages: this.state.messages.concat(data.message)});
    }, this);

  // BINDING A CHANNEL ONCE MEANS THAT YOU WILL FOREVER LISTEN TO IT GLOBALLY AND ANY MESSAGE THAT COMES IN
  // WILL BE RENDER THRU SET STATE, NO NEED TO CALL chatroom BIND AGAIN otherwise duplicate renders and adds
  // to messages
    this.messageListener = MessageStore.addListener(this._onChange);
    ClientActions.fetchAllMessages();

    // using refs to use "autofocus" feature because it is not supported in react through traditional html way
    this.refs.messageInput.focus();
  },

  _onChange: function() {
    // DOESNT NEED TO BE CALLED SINCE chatRoom only needs initial bind
    // this.chatRoom.bind('new_message', function(data){
    //   this.setState({messages: this.state.messages.concat(data.message)});
    // }, this);
    // console.log(this.state.messages);
    this.setState({messages: MessageStore.all()});
  },

  _onMessage: function(e){
    console.log("MESSAGE CALLED");
    if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    // if the text is blank, do nothing
    if (text === "") return;

    var message = {
      text: text,
    };

    var that = this;

    // $.ajax({
    //   url: '/api/messages',
    //   method: "POST",
    //   data: {message: message},
    //   success: function (data) {
    //     console.log("SUCCESSFULLY CREATED");
    //     console.log(data);
    //     input.value = "";
    //   }
    // });
    ClientActions.createMessage(message);
    input.value = "";
  },

  render: function() {
    // if (!this.props.username) var style = {display:'none'};
    return (
      <div>
        <MessageList messages={this.state.messages}  />
        <input placeholder="Type your message" onKeyPress={this._onMessage} ref="messageInput"/>
      </div>
    );
  }
});

module.exports = MainView;