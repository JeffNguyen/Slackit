var Store = require ('flux/utils').Store;
var Dispatcher = require ('../dispatcher/dispatcher');
var ChannelConstants = require('../constants/channel_constants');
var ChannelStore = new Store(Dispatcher);

var _channels = {};
var current_channel = {};

ChannelStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case ChannelConstants.SINGLE_CHANNEL_RECEIVED:
      addChannel(payload.channel);
      break;
    case ChannelConstants.CHANNELS_RECEIVED:
      resetChannels(payload.channels);
      break;
    case ChannelConstants.CURRENT_CHANNEL_REQUEST_RECEIVED:
      setCurrentChannel(payload.channel)
      break;
  }
  this.__emitChange();
};

ChannelStore.all = function(){
  var channelArray = [];
  for (var id in _channels){
    channelArray.push(_channels[id]);
  }
  return channelArray.slice();
};

ChannelStore.currentChannel = function(){
  var curr = {};
  for (var k in current_channel) {
    curr[k] = current_channel[k];
  }
  return curr;
}

var addChannel = function(channel){
  _channels[channel.id] = channel
};

var resetChannels = function(channels){
  _channels = {};
  for (var i = 0; i < channels.length; i++) {
    _channels[channels[i].id] = channels[i];
  }
};

var setCurrentChannel = function(channel){
  current_channel = []
  current_channel.push(channel);
};

module.exports = ChannelStore;