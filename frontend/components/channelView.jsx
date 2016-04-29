var React = require('react');
var ChannelIndexItem = require('./channelIndexItem');
var ClientActions = require('../actions/client_actions');

var ChannelView = React.createClass({

  getInitialState: function() {
    return {
      channels: ['GLOBAL', 'TECHNOLOGY', 'BASKETBALL', 'BASEBALL', 'POLITICS', 'MOVIES'] 
    };
  },

  render: function () {
    return(
      <div className='aside aside-1'>
        <ChannelIndexItem channels={this.state.channels} />
      </div>

    );
  }
});

module.exports = ChannelView;