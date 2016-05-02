var React = require('react');
var ClientActions = require('../actions/client_actions');
var MessageStore = require('../stores/message_store');
var ChannelStore = require('../stores/channel_store');
var hashHistory = require('react-router').hashHistory
var AddPeopleChannelItem = require('./addPeopleChannelItem');

var ChannelIndexItem = React.createClass({

  _setUrl: function(){
    hashHistory.push('/' + this.props.channel.id);

    // once I click a channel, I set the url which will re render this specific component
    // I also need to also call fetch messages on the new channel id, this will activate
    // the established listener in the messageView.jsx based on flux architecture
    ClientActions.fetchAllMessages(this.props.channel.id);
    // ClientActions.fetchStream(this.props.channel.name.toLowerCase());
  },

  render: function() {

    var identifier;
    if (parseInt(this.props.channelId) === this.props.channel.id){
      identifier = 'channel-selected';
    } else {
      identifier = 'channel-unselected';
    }

    var list;

    // <AddPeopleChannelItem channelId={this.props.channel.id}/>
    // the prop shouldn't be based on channelId because whatever is in the url
    // might not necessarily reflect what channel the '+' button is associated with
    // I can click the + and if I use this.props.channelId, it will pass in the current 
    // channel I'm viewing, but I can add people even if I don't have the channel selected
    // since it's a modal

    // public channel
    // leave it up to interpretation of private DM vs channel
    if (this.props.channel.public){
      list =         
          <button className={identifier} onClick={this._setUrl}>
            {this.props.channel.name}
          </button>
    } else {
      list =
          <div>
            <button className={identifier} onClick={this._setUrl}>
              {this.props.channel.name}
            </button> &nbsp;
            <AddPeopleChannelItem channelId={this.props.channel.id}/>
          </div>
    }

    return (
      <div>
        <br/>
        {list}
      </div>
    );
  }

});

module.exports = ChannelIndexItem;
