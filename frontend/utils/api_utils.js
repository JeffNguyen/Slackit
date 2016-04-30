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

  fetchAllMessages: function(id){
    $.ajax({
      url: '/api/messages',
      method: "GET",
      dataType: 'json',
      success: function (messages) {
        ServerActions.receiveMessages(messages, id);
      }
    });
  },

  createChannel: function(data){
    $.ajax({
      url: 'api/channels',
      method: 'POST',
      dataType: 'json',
      data: {channel: data},
      success: function (channel){
        console.log('made');
        ServerActions.receiveChannel(channel)
      }
    })
  },

  fetchAllChannels: function(){
    $.ajax({
      url: '/api/channels',
      method: "GET",
      dataType: 'json',
      success: function (channels) {
        ServerActions.receiveChannels(channels);
      }
    });
  }

};
