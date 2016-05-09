var React = require('react');
var ClientActions = require('../actions/client_actions');
var StreamStore = require('../stores/stream_store');
var StreamIndexItem = require('./streamIndexItem');
var ChannelStore = require('../stores/channel_store');

var StreamView = React.createClass({

  getInitialState: function(){
    return (
      {
        content: [{title: '', url:''}], 
        subreddit: ''
      }
    );
  },

  componentWillMount: function(){
    this.pusher = new Pusher('50ed18dd967b455393ed');
  },

  componentDidMount: function() {
    this.addChannelListener = ChannelStore.addListener(this._channelUpdated);
    ClientActions.fetchSingleChannel(this.props.channelId);
  },

  _channelUpdated: function(){
    // callback happens when the reddit Alien is clicked (which mounts the component)
    // OR when a new channel is clicked on the left pane

    // if it was originally mounted - there is nothing to unsubscribe to - so u check for
    // length is 0

    // otherwise you unsubscribe and unbind the channel

    var current_channel = ChannelStore.currentChannel();
    var subredditName = current_channel[0].name.toLowerCase();

    console.log(subredditName);

    // if subreddit length 0 - then base case, no binding removal needed
    if (this.state.subreddit.length === 0){

    } else {
      // if you clicked on a new channel - clear the previous content of the stream
      // otherwise keep it

      // still unclear
      if (this.state.subreddit !== subredditName){
        this.state.content = [{title: '', url: ''}];
      }

      this.pusher.unsubscribe(this.state.subreddit);
      this.subredditChannel.unbind('new-listing', this._callback);
    }

    this.state.subreddit = subredditName;
    
    this.subredditChannel = this.pusher.subscribe(subredditName);

    this.subredditChannel.bind('new-listing', this._callback, this);
  },

  _callback: function(listing){
    this.setState({content: this.state.content.concat([{title: listing.title, url: listing.url}])});
  },

  render: function() {
    // TODO: Put 'no new posts!' if content is empty
    return (
      <div className = 'aside aside-2'>
        <div className='listening'>
          Listening for new posts <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
        </div>
         {this.state.content.map(function(content, index){
          return (
            <StreamIndexItem content={content}/>
          )
        }.bind(this))
      }
      </div>
    );

  }
});

module.exports = StreamView;