var React = require('react');
var ChannelIndexItem = require('./channelIndexItem');
var ClientActions = require('../actions/client_actions');

var ChannelView = React.createClass({

  getInitialState: function() {
    return {
      channels: [] 
    };
  },

  render: function() {
    return (
      <div className = 'aside aside-1'>
        CHANNEL ITEMS GO HERE
      </div>
    );
  }
});

module.exports = ChannelView;