var React = require('react');

var HeaderView = React.createClass({

  getInitialState: function(){
    return ({username: window.current_user.username});
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

  render: function() {
    return (
      <div className='chat-header'>
        {this.state.username}&nbsp; | &nbsp;
        <button onClick={this._settings}>Settings</button>&nbsp;| &nbsp;
        <button onClick={this._logout}>Logout</button>&nbsp;
      </div>
    );
  }
});

module.exports = HeaderView;