var React = require('react');
var ClientActions = require('../actions/client_actions');
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

    ClientActions.fetchSingleChannel(this.props.channel.id);
  },

  render: function() {

    var identifier;
    var addPeople;
    if (parseInt(this.props.channelId) === this.props.channel.id){
      identifier = 'channel-selected';
      addPeople = <AddPeopleChannelItem channelId={this.props.channelId} />
    } else {
      identifier = 'channel-unselected';
    }

    if (this.props.channel.public === false){
      identifier += '-private';
    }

    var list;

    var divStyle = {
      cursor: 'pointer'
    };

    if (this.props.channel.public){
      list =  
        <div className='inner-channel-container'>
          <div style= {divStyle} onClick={this._setUrl} className={identifier} >       
            <button className='channel-name'><div className='buttontext'>
              {this.props.channel.name}</div>
            </button>
          </div>
        </div>
    } else {
      list =
        <div className='inner-channel-container'>
          <div style= {divStyle} onClick={this._setUrl} className={identifier}>
            <button className='channel-name'><div className='buttontext'>
              {this.props.channel.name}</div>
            </button> &nbsp;
            {addPeople}
          </div>
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
