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
    };
  },

  componentWillMount: function() {
    this.channelListener = ChannelStore.addListener(this._channelViewChanged);
    ClientActions.fetchAllChannels();

  },

  _channelViewChanged: function(){
    this.setState({channels: ChannelStore.all()});
  },

  _selected: function(e){
    // var indexToSelect = e.currentTarget.value;
    // for (var i = 0; i < this.state.channels.length; i++){
    //   this.state.channels[i].selected = 'false';
    // }
    // this.state.channels[indexToSelect].selected = 'true';
    // this.setState({channels: this.state.channels})
  },

  // render: function () {
  //   return(
  //     <div className='aside aside-1'>
  //       {this.state.channels.map(function(channel, index){
  //         var selected;
  //         if (channel.selected === 'false'){
  //           selected = 'channel-unselected';
  //         } else {
  //           selected = 'channel-selected';
  //         }
  //         return (
  //           <ChannelIndexItem channel={channel.name} key={channel.id} chosen={this._selected} selected={selected} index={index}/>
  //         )
  //       }.bind(this))
  //     }
  //     </div>

  //   );
  // }

  render: function () {
    return(
      <div className='aside aside-1'>
        <CreateChannelItem />
        {this.state.channels.map(function(channel, index){
          return (
            <ChannelIndexItem channel={channel} key={channel.id} channelId={this.props.channelId}/>
          )
        }.bind(this))
      }
      </div>

    );
  }


});

module.exports = ChannelView;