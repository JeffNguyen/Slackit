var React = require('react');
var WelcomeView = require('./welcomeView');
var MessageView = require('./messageView');

var Chat = React.createClass({

  // finding current_user HERE http://stackoverflow.com/questions/29737384/accessing-current-user-variable-from-application-js-in-rails-3
  // document.cookie
  // getInitialState: function() {
  //   return {
  //     username: null
  //   };
  // },

  // componentDidMount: function() {

  // },

  // _onName: function(e) {
  //   if (e.nativeEvent.keyCode != 13) return;
  //   var username = e.target.value;
  //   this.setState({username: username});
  // },

  render: function() {
    return (
      <div>
        <MessageView />
      </div>
    );
  }

});

module.exports = Chat;
