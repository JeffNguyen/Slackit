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

  _handleClose: function(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  },

  _handleOpen: function(){
    ModalStyle.content.opacity = 100;
    this.refs.channelInput.focus();
  },

  handleEnterSubmit: function(e){
    if (e.nativeEvent.keyCode != 13) return;
    
    // message will determine if DM or private channel
    var name = e.currentTarget.value;
    var channel = {name: name, public: false, message: false};
    ClientActions.createChannel(channel);
    this.setState({modalOpen: false});
  },

  handleButtonSubmit: function(){
    var input = document.getElementById('create-channel-input');
    var channel = {name: input.value, public: false, message: false};
    ClientActions.createChannel(channel);
    this.setState({modalOpen: false});
  },

  render: function(){
    return (
      <div className='create-channel-container'>
        <div className='create-channel-header'>
          CHANNELS<button className='create-channel-button' onClick={this._handleClick}><i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i></button>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._handleClose}
          style={ModalStyle}
          onAfterOpen={this._handleOpen}>
            
          <input id='create-channel-input' onKeyPress={this.handleEnterSubmit} placeholder='Create Channel' ref='channelInput'/><br/>
          <button className='create-channel-modal-submit' onClick={this.handleButtonSubmit}>Submit</button>
          <button className='create-channel-modal-cancel' onClick={this._handleClose}>Cancel</button>


        </Modal>
      </div>
    );
  }
});

module.exports = CreateChannelItem; 