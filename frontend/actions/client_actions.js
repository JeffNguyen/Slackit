var ApiUtil = require('../utils/api_utils');
var ServerActions = require('./server_actions');

var ClientActions = {
// Example Function
// fetchAllPokemons: function() {
// ApiUtil.fetchAllPokemons();
// };
  createMessage: function(message) {
    ApiUtil.createMessage(message);
  },

  fetchAllMessages: function(id){
    ApiUtil.fetchAllMessages(id);
  },

  setChannel: function(channel){
    ServerActions.setChannel(channel);
  },
  
  createChannel: function(channel){
    ApiUtil.createChannel(channel);
  },

  fetchAllChannels: function(){
    ApiUtil.fetchAllChannels();
  }
};

module.exports = ClientActions;
