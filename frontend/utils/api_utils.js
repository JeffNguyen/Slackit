var ServerActions = require('../actions/server_actions.js');

var ApiUtil = {

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

  // can't use active record because we need to filter based on hashistory url, need to pass in explicitly
  // so we know which messages correspond to which channel
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
        ServerActions.receiveSingleChannel(channel);
      }.bind(this)
    });
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
  },

  createChannelUserEntry: function(data){
    // data represents the channelId and email
    $.ajax({
      url: 'api/channel_users',
      method: 'POST',
      dataType: 'json',
      data: {channel_user: data},
      success: function (entry){
        console.log(entry);
        console.log("successfully created join table link");
      }
    });
  }

};

module.exports = ApiUtil;