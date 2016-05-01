var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;

var MessageView = require('./components/messageView');
var ChannelView = require('./components/channelView');
var HeaderView = require('./components/headerView');
var StreamView = require('./components/streamView');
var FooterView = require('./components/footerView');

var ChannelIndexItem = require('./components/channelIndexItem');

var App = React.createClass({

  componentWillMount: function() {
    // later can also check if the id paramter given is not in the list of channels allowed, redirect to default global
    if (this.props.params.id === undefined){
      HashHistory.push('/' + '1');
      this.props.params.id = 1;
    }
    else {
      HashHistory.push('/' + this.props.params.id)
    }
  },

  render: function() {
    return (
      <div className= 'global-container'>
        <div className="wrapper">
          <HeaderView />
          <MessageView channelId={this.props.params.id}/>
          <ChannelView channelId={this.props.params.id}/>
          <StreamView />
          <FooterView />
        </div>
        {this.props.children}
      </div>
    );
  }
});

// can only use this.props.params."id" if in the url - we actually load that specific component
// so if on path=':id' component={channelview} - in channel view we can access that id,
// but since we have all components on one interface we can't use params, but have to pass it through explictly in app component (which i did above in the app render)

// using a div because adjacent jsx elements need to contained in 1 html element
// also they are side by side because if they were nested, then if i went to '/1' it would render twice, it would match the '/' and also the '/:id'
// this means it either hits '/' or '/id' - if it hits the '/' i check in componentwillmount of {app} to see if id is undefined - which it is so i set
// it by default to 1 and update hashhistory, which will trigger appropriate render, and automatically select global as default channel since i passed
// the update params id all the way into channelview -> channelindexitem
var routes = (
  <div>
  	<Route path='/' component={App}></Route>
    <Route path='/:id' component={App}></Route>
  </div>
);

document.addEventListener('DOMContentLoaded', function () {
  Modal.setAppElement(document.getElementById('root'));
	ReactDOM.render(
		<Router history={HashHistory}>{routes}</Router>,
		document.getElementById('root')
	);
});
