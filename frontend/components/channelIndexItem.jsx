var React = require('react');
var ClientActions = require('../actions/client_actions');
var MessageStore = require('../stores/message_store');
var ChannelStore = require('../stores/channel_store');
var hashHistory = require('react-router').hashHistory;

var ChannelIndexItem = React.createClass({

  _setUrl: function(){
    hashHistory.push('/' + this.props.channel.id);

    // once I click a channel, I set the url which will re render this specific component
    // I also need to also call fetch messages on the new channel id, this will activate
    // the established listener in the messageView.jsx based on flux architecture
    ClientActions.fetchAllMessages(this.props.channel.id);
    ClientActions.fetchStream(this.props.channel.name.toLowerCase());
  },

  render: function() {
    var identifier;
    if (parseInt(this.props.channelId) === this.props.channel.id){
      identifier = 'channel-selected';
    } else {
      identifier = 'channel-unselected';
    }
    return (
      <div>
        <br/>
          <button className={identifier} onClick={this._setUrl}>
            {this.props.channel.name}
          </button>
        <br/>
      </div>
    );
  }

});

module.exports = ChannelIndexItem;
