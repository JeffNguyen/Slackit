var ApiUtil = require('../utils/api_utils');
var ServerActions = require('./server_actions');

var ClientActions = {
  createMessage: function(message) {
    ApiUtil.createMessage(message);
  },

  fetchAllMessages: function(id){
    ApiUtil.fetchAllMessages(id);
  },
  
  createChannel: function(channel){
    ApiUtil.createChannel(channel);
  },

  fetchAllChannels: function(){
    ApiUtil.fetchAllChannels();
  },

  fetchStream: function(stream) {
    ServerActions.receiveSingleStream(stream);
  }
};

module.exports = ClientActions;
