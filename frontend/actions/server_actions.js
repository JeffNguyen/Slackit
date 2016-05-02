var Dispatcher = require('../dispatcher/dispatcher.js');
var MessageConstants = require('../constants/message_constants');
var ChannelConstants = require('../constants/channel_constants');
var StreamConstants = require('../constants/stream_constants');

var ServerActions = {
  receiveSingleMessage: function (message) {
    Dispatcher.dispatch({
      actionType: MessageConstants.SINGLE_MESSAGE_RECEIVED,
      message: message
    });
  },

  receiveMessages: function (messages, id) {
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages,
      id: id
    });
  },

  receiveChannel: function(channel) {
    Dispatcher.dispatch({
      actionType: ChannelConstants.SINGLE_CHANNEL_RECEIVED,
      channel: channel
    });
  },

  receiveChannels: function(channels) {
    Dispatcher.dispatch({
      actionType: ChannelConstants.CHANNELS_RECEIVED,
      channels: channels
    });
  },

  receiveSingleStream: function(stream) {
    setTimeout(function(){
      Dispatcher.dispatch({
        actionType: StreamConstants.STREAM_RECEIVED,
        stream: stream
      })
    }, 1);
  }
};

module.exports = ServerActions;
