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

var ChannelIndexItem = require('./components/channelIndexItem');

var App = React.createClass({

  // componentWillMount: function() {
  //   // later can also check if the id parameter given is not in the allowed list of channels,
  //   // redirect to default global
  //   if (this.props.params.id === undefined){
  //     HashHistory.push('/' + '1');
  //     this.props.params.id = 1;
  //   }
  //   else {
  //     HashHistory.push('/' + this.props.params.id)
  //   }
  // },

  // this.props.params.id is the most important part
  // it will tell child components how to render their information in the flux architecture
  // the channelId is integral to get everything else working
  render: function() {
    var id;
    if (this.props.params.id === undefined){
      id = 1;
    } else {
      id = this.props.params.id;
    }
    return (
      <div className= 'global-container'>
        <HeaderView />
        <div className="wrapper">
          <MessageView channelId={id}/>
          <ChannelView channelId={id}/>
          <StreamView />
        </div>
        {this.props.children}
      </div>
    );
  }
});

// can only use this.props.params."id" if in the url and if we passed it down from parent component
// to a child component 
//- if we had path='/:id' nested underneath App and had it load another component, we could access that id
// through this.props.params.id, 
// but since we have all components on one interface all underneath 'App' component, we have to pass it down
// explicitly here, we can't access this.props.params.id from url because there is no nesting of components

// see above {this.props.params.id} will represent the current :id 

// need a div because adjacent jsx elements aren't allowed
// need to be side by side because if they were nested, then if i went to '/1' it would render twice, it would match the '/' and also the '/:id'
// now it means it either hits '/' or '/id' - if it hits the '/' i check in componentwillmount of {app} to see if id is undefined - which it is so i set
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
