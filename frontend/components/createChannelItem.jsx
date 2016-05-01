var React = require('react');
var Modal = require('react-modal');
var ModalStyle = require('./style/modal_style');
var ClientActions = require('../actions/client_actions');

var CreateChannelItem = React.createClass({
  getInitialState: function(){
    return({modelOpen: false});
  },

  _handleClick: function(){
    this.setState({modalOpen: true});
  },

  componentWillUpdate: function(){
    // autofocuses on the channel creation - need a timer so it gives the input in render a chance
    // to show up on page, then we can autofocus
    setTimeout(function(){
      this.refs.channelInput.focus();
    }.bind(this), 100)
  },

  _handleClose: function(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  },

  _handleOpen: function(){
    ModalStyle.content.opacity = 100;
  },

  handleSubmit: function(e){
    if (e.nativeEvent.keyCode != 13) return;
    //ajax to create channel
    
    var name = e.currentTarget.value;
    var channel = {name: name, selected: 'false'};
    ClientActions.createChannel(channel);
    this.setState({modalOpen: false});
  },

  render: function(){
    return (
      <div>
        <button onClick={this._handleClick}>Create Channel</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._handleClose}
          style={ModalStyle}
          onAfterOpen={this._handleOpen}>
            
          <input onKeyPress={this.handleSubmit} placeholder='Create Channel' ref='channelInput'/><br/>
          <button onClick={this._handleClose}>Cancel</button>

        </Modal>
      </div>
    );
  }
});

module.exports = CreateChannelItem; 