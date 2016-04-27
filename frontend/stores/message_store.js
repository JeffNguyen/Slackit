var Store = require ('flux/utils').Store;
var Dispatcher = require ('../dispatcher/dispatcher');
var MessageConstants = require ('../constants/message_constants');
var MessageStore = new Store(Dispatcher);

var _messages = [];

MessageStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case MessageConstants.SINGLE_MESSAGE_RECEIVED:
      createMessage(payload.message);
      break;
    case MessageConstants.MESSAGES_RECEIVED:
      resetMessages(payload.messages);
      break;
  }
  this.__emitChange();
};

MessageStore.all = function(){
  var messageArray = [];
  for (var id in _messages){
    messageArray.push(_messages[id]);
  }
  return messageArray.slice();
};

var resetMessages = function(messages){
  _messages = [];
  messages.forEach(function(message){
    _messages.push(message);
  });
  console.log(_messages.length);
};

var createMessage = function(message){
  _messages.push(message);
};

module.exports = MessageStore;