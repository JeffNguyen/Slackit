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

    // to update the store for currentChannel which will update the addPeople icon in header
    // ClientActions.fetchSingleChannel(this.props.channel.id);
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

    if (this.props.channel.public){
      list =  
        <div className='channel-item'>
          <div className={identifier} >       
            <button onClick={this._setUrl}>
              {this.props.channel.name}
            </button>
          </div>
        </div>
    } else {
      list =
        <div className='channel-item'>
          <div className={identifier}>
            <button  onClick={this._setUrl}>
              {this.props.channel.name}
            </button> &nbsp;
          </div>
          <AddPeopleChannelItem channelId={this.props.channel.id} />
        </div>
    }

    return (
      <div className='channel-container'>
        <br/>
        {list}
      </div>
    );
  }

});

module.exports = ChannelIndexItem;
