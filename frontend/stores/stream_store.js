var Store = require ('flux/utils').Store;
var Dispatcher = require ('../dispatcher/dispatcher');
var StreamConstants = require('../constants/stream_constants');
var StreamStore = new Store(Dispatcher);

var _stream = [];
var request = false;

StreamStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case StreamConstants.STREAM_RECEIVED:
      resetStream(payload.stream);
      break;
    case StreamConstants.REDDIT_REQUEST_RECEIVED:
      setRedditRequest();
      break;
  }
  this.__emitChange();
};

StreamStore.currentStream = function(){
  var stream;
  stream = _stream[0]
  return stream;
};

StreamStore.request = function(){
  return request;
};

var resetStream = function(stream){
  _stream = [];
  _stream.push(stream);
};

var setRedditRequest = function(){
  if (request === true) {
    request = false;
  } else {
    request = true;
  }
}

module.exports = StreamStore;

// bug with ALL