var React = require('react');
var AddPeopleChannelItem = require('./addPeopleChannelItem');
var ClientActions = require('../actions/client_actions');

var HeaderView = React.createClass({

  getInitialState: function(){
    // channel is default to true but listener will update it accordingly before final render
    return ({username: window.current_user.username});
  },

  _channelUpdated: function(){
    this.setState({channel: ChannelStore.currentChannel()})
  },

  _logout: function(e) {
    e.preventDefault();
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'json',
      success: function(){
        window.location.href = 'users/sign_in';
      }

    });
  },

  _settings: function(e) {
    window.location.href = 'users/edit'
  },

  _redditStream: function(){
    ClientActions.activateStream();
  },

  render: function() {
    var add;

    return (
      <div className='chat-header'>
        <div className='header-left'>
          SLACKIT
        </div>
        <div className='header-right'>
          {this.state.username}&nbsp; | &nbsp;
          <button onClick={this._redditStream}>
            <i className="fa fa-reddit-alien" aria-hidden="true"></i>
          </button>&nbsp; | &nbsp;
          <button onClick={this._settings}>
            <i className="fa fa-cog" aria-hidden="true"></i>
          </button>&nbsp;| &nbsp;
          <button onClick={this._logout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </button>&nbsp;
        </div>
      </div>
    );
  }
});

module.exports = HeaderView;