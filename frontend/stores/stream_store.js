var Store = require ('flux/utils').Store;
var Dispatcher = require ('../dispatcher/dispatcher');
var StreamConstants = require('../constants/stream_constants');
var StreamStore = new Store(Dispatcher);

var _stream = [];

StreamStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case StreamConstants.STREAM_RECEIVED:
      resetStream(payload.stream);
      break;
  }
  this.__emitChange();
};

StreamStore.currentStream = function(){
  var stream;
  stream = _stream[0]
  return stream;
};

var resetStream = function(stream){
  _stream = [];
  _stream.push(stream);
};

module.exports = StreamStore;