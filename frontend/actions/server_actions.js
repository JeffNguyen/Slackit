var Dispatcher = require('../dispatcher/dispatcher.js');
// Example Constants call
// var PokemonConstants = require('../constants/pokemonConstants.js');
var MessageConstants = require('../constants/message_constants');

var ServerActions = {
// Example Function
// receiveAllPokemons: function (pokemons) {
// Dispatcher.dispatch({
// actionType: PokemonConstants.POKEMONS_RECEIVED,
// pokemons: pokemons
// });
// }
  receiveSingleMessage: function (message) {
    Dispatcher.dispatch({
      actionType: MessageConstants.SINGLE_MESSAGE_RECEIVED,
      message: message
    });
  },

  receiveMessages: function (messages) {
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    });
  }
};

module.exports = ServerActions;
