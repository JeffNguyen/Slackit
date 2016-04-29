var React = require('react');

var ChannelIndexItem = React.createClass({
  getInitialState: function(){
    var channels = {}
    this.props.channels.map(function(channel){
      channels[channel] = 'channel-unselected';
    });
    return {
      channels: channels
    }
  },

  _clicked: function(e){
    for (var key in this.state.channels){
      this.state.channels[key] = 'channel-unselected';
    }
    this.state.channels[e.target.textContent] = 'channel-selected'
    this.setState({channels: this.state.channels});
  },

  render: function() {

    var list = this.props.channels.map(function(channel, index){
      return  (
        <div>
          <button key={index} className={this.state.channels[channel]} onClick={this._clicked}>
            {channel}
          </button><br/><br/>
        </div>
      );
    }.bind(this));

    return (
      <div>
        {list}
      </div>
    );
  }

});

module.exports = ChannelIndexItem;