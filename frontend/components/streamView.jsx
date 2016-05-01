var React = require('react');
var ClientActions = require('../actions/client_actions');
var StreamStore = require('../stores/stream_store');
var StreamIndexItem = require('./streamIndexItem');

var StreamView = React.createClass({

  getInitialState: function(){
    return (
      {stream: 'all', content: [{title: '', url:''}]}
    );
  },

  // componentWillMount: function() {
  //   this.pusher = new Pusher('50ed18dd967b455393ed');

  //   this.subredditChannel = this.pusher.subscribe('askreddit');

  //   // this.streamListener = StreamStore.addListener(this._streamChanged);

  //   this.subredditChannel.bind('pusher:subscription_succeeded', function(){
  //     console.log('successful reddit subscription');
  //   }, this);
  // },

  // componentDidMount: function() {
  //   this.subredditChannel.bind('new-listing', function(listing){
  //     // this.streamListener = StreamStore.addListener(this._streamChanged);
  //     // ClientActions.fetchAllStreams()
  //     console.log(listing);
  //     this.setState(
  //       {content: this.state.content.concat([{title: listing.title, url: listing.url}])});
  //   }, this)
  // },

  // _streamChanged: function(){
  //   // this.subredditChannel = this.pusher.subscribe(StreamStore.currentStream());

  //   this.setState({stream: StreamStore.currentStream()});
  //   // console.log(this.state.stream);
  // },

  render: function() {
    // return (
    //   <div className = 'aside aside-2'>
    //     ASKREDDIT STREAM
    //      {this.state.content.map(function(content, index){
    //       return (
    //         <StreamIndexItem content={content}/>
    //       )
    //     }.bind(this))
    //   }
    //   </div>
    // );

    return (
      <div className = 'aside aside-2'>
        ASKREDDIT STREAM
      </div>
    );
  }
});

module.exports = StreamView;