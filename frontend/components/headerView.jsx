var React = require('react');
var AddPeopleChannelItem = require('./addPeopleChannelItem');
var ClientActions = require('../actions/client_actions');
var ChannelStore = require('../stores/channel_store');
var Tour = require('../tour');


var HeaderView = React.createClass({

  getInitialState: function(){
    return ({
      username: window.current_user.username, 
      anonymous: window.current_user.anonymous,
      sign_in_count: window.current_user.sign_in_count
    });
  },

  componentDidMount: function(){
    debugger
    if (this.state.anonymous === "true" || this.state.sign_in_count === "1"){
      Tour.start();
    }
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

  startTour: function(){
    Tour.cancel();
    Tour.start();
  },

  render: function() {
    return (
      <div className='chat-header'>
        <div className='header-left'>
          SLACKIT
        </div>
        <div className='header-right'>
          {this.state.username}&nbsp; &nbsp; | &nbsp; &nbsp;
          <button className='reddit-button' onClick={this._redditStream}>
            <i className="fa fa-reddit-alien fa-lg" aria-hidden="true"></i>
          </button>&nbsp; &nbsp; | &nbsp; &nbsp;
          <button className='info-button' onClick={this.startTour}>
            <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          </button>&nbsp; &nbsp;| &nbsp; &nbsp;
          <button onClick={this._settings}>
            <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
          </button>&nbsp; &nbsp;| &nbsp; &nbsp;
          <button onClick={this._logout}>
            <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
          </button>&nbsp; &nbsp;
        </div>
      </div>
    );

  }
});

module.exports = HeaderView;