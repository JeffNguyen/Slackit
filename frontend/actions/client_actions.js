var ApiUtil = require('../utils/api_utils.js');

var ClientActions = {
// Example Function
// fetchAllPokemons: function() {
// ApiUtil.fetchAllPokemons();
// };
  createMessage: function(message) {
    ApiUtil.createMessage(message);
  },

  fetchAllMessages: function(){
    ApiUtil.fetchAllMessages();
  }
};

module.exports = ClientActions;
