var React = require('react');
var Modal = require('react-modal');
var ModalStyle = require('./style/modal_style');
var ClientActions = require('../actions/client_actions');

var AddPeopleChannelItem = React.createClass({
  getInitialState: function(){
    return({modalOpen: false});
  },

  _handleClick: function(){
    this.setState({modalOpen: true});
  },

  _handleClose: function(){
    this.setState({modalOpen: false});
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

  _handleSubmit: function(e){
    if (e.nativeEvent.keyCode != 13) return;

    var email = e.currentTarget.value;
    var object = {id: this.props.channelId, email: email}

    ClientActions.createChannelUser(object);

  },

  render: function(){
    return (
      <div>
        <button onClick={this._handleClick}>+</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._handleClose}
          style={ModalStyle}
          onAfterOpen={this._handleOpen}>

          <input onKeyPress={this._handleSubmit} placeholder='Enter email of person to invite' ref='channelInput'/> &nbsp;
          <button onClick={this._handleClose}>Cancel</button><br/><br/>

        </Modal>
      </div>
    );
  }
});

module.exports = AddPeopleChannelItem;