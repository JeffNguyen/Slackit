var React = require('react');
var ChannelIndexItem = require('./channelIndexItem');
var ClientActions = require('../actions/client_actions');
var ChannelStore = require('../stores/channel_store');
var MessageStore = require('../stores/message_store');
var hashHistory = require('react-router').hashHistory;
var CreateChannelItem = require('./createChannelItem');

var ChannelView = React.createClass({

  getInitialState: function() {
    return {
      channels: []
    }
  },

  componentDidMount: function() {
    this.channelListener = ChannelStore.addListener(this._channelViewChanged);
    ClientActions.fetchAllChannels();
  },

  _channelViewChanged: function(){
    this.setState({channels: ChannelStore.all()});
  },

  render: function () {
    return(
      <div className='aside aside-1'>
        <CreateChannelItem />
        {this.state.channels.map(function(channel, index){
          return (
            <ChannelIndexItem 
              channel={channel} 
              key={channel.id} 
              channelId={this.props.channelId}
              public={channel.public} 
            />
          )
        }.bind(this))
      }
      </div>

    );
  }


});

module.exports = ChannelView;