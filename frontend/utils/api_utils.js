var ServerActions = require('../actions/server_actions.js');

module.exports = {
// Example Function
// createPokemon: function (pokemon, callback) {
// $.ajax({
// url: 'api/pokemon',
// method: 'POST',
// dataType: 'json',
// data: {pokemon: pokemon},
// success: function (pokemon) {
// ServerActions.receiveSinglePokemon(pokemon);
// callback && callback(pokemon.id);
// }
// });
// }
  createMessage: function(data){
    $.ajax({
      url: '/api/messages',
      method: "POST",
      dataType: 'json',
      data: {message: data},
      success: function (message) {
        ServerActions.receiveSingleMessage(message);
      }
    });
  },

  fetchAllMessages: function(data){
    $.ajax({
      url: '/api/messages',
      method: "GET",
      dataType: 'json',
      success: function (messages) {
        ServerActions.receiveMessages(messages);
      }
    });
  }
};
