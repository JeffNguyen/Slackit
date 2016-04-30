var React = require('react');
var ClientActions = require('../actions/client_actions');
var MessageStore = require('../stores/message_store');
var ChannelStore = require('../stores/channel_store');
var hashHistory = require('react-router').hashHistory;

var ChannelIndexItem = React.createClass({
  
  getInitialState: function() {
    return ({
      selected: ''
    })
  },

  _setUrl: function(){
    hashHistory.push('/' + this.props.channel.id);
    // once I click a channel, I set the url which will re render this specific component
    // but I need to also call fetch messages on the new channel id, this will activate
    // the established listener in the messageView.jsx
    // flux architecture
    ClientActions.fetchAllMessages(this.props.channel.id);
    // this.setState({selected: true});
  },

  render: function() {
    // var selected;
    // if (this.state.selected){
    //   selected = 'channel-selected';
    // }
    // else {
    //   selected = 'channel-unselected';
    // }
    
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
