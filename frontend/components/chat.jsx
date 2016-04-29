var React = require('react');
var WelcomeView = require('./welcomeView');
var MessageView = require('./messageView');
var ChannelView = require('./channelView');
var HeaderView = require('./headerView');
var StreamView = require('./streamView');
var FooterView = require('./footerView');

var Chat = React.createClass({

  render: function() {
    return (
      <div className= 'global-container'>
        <div className="wrapper">
          <HeaderView />
          <MessageView />
          <ChannelView />
          <StreamView />
          <FooterView />
        </div>
      </div>
    );
  }

});

module.exports = Chat;
