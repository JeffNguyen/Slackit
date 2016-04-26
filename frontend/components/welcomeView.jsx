var React = require('react');

var WelcomeView = React.createClass({

  render: function() {

    var view;
    var username = this.props.username;

    if (username) {
      view = <h1>Welcome {username}</h1>;
    } else {
      view = <input onKeyPress={this.props._onName} 
              placeholder="Please enter your Twitter username" />; 
    }

    return view;
  }

});

module.exports = WelcomeView;