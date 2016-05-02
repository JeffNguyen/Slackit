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

  // can change how messages gets returned in messageController index - we can filter using activerecord
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
    // console.log(this.createChannelUserEntry);
    $.ajax({
      url: 'api/channels',
      method: 'POST',
      dataType: 'json',
      data: {channel: data},
      success: function (channel){
        // when a channel is created successfully, create a join table link with the user
        debugger
        this.createChannelUserEntry(channel);
        ServerActions.receiveChannel(channel);
      }.bind(this)
    });
  },

  createChannelUserEntry: function(channel){
    $.ajax({
      url: 'api/channel_users',
      method: 'POST',
      dataType: 'json',
      data: {channel_user: channel},
      success: function (entry){
        console.log(entry);
        console.log("successfully created join table link");
      }
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
  }

  // fetchAllChannels: function(data){
  //   console.log(data);
  //   $.ajax({
  //     url: '/api/channels',
  //     method: "GET",
  //     dataType: 'json',
  //     data: {user_id: data},
  //     success: function (channels) {
  //       console.log(channels);
  //       ServerActions.receiveChannels(channels);
  //     }
  //   });
  // }

};

module.exports = ApiUtil;