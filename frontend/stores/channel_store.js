var Store = require ('flux/utils').Store;
var Dispatcher = require ('../dispatcher/dispatcher');
var ChannelConstants = require('../constants/channel_constants');
var ChannelStore = new Store(Dispatcher);

var _channels = {};

ChannelStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case ChannelConstants.SET_CHANNEL_RECEIVED:
      setChannel(payload.channel);
      break;
    case ChannelConstants.SINGLE_CHANNEL_RECEIVED:
      addChannel(payload.channel);
      break;
    case ChannelConstants.CHANNELS_RECEIVED:
      resetChannels(payload.channels);
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

var addChannel = function(channel){
  _channels[channel.id] = channel
};

var resetChannels = function(channels){
  _channels = {};
  for (var i = 0; i < channels.length; i++) {
    _channels[channels[i].id] = channels[i];
  }
};

ChannelStore.findSelected = function(){
  console.log(_channels);
  for (var id in _channels){
    if (_channels[id].selected === 'true') {
      return _channels[id];
    }
  }
}
module.exports = ChannelStore;