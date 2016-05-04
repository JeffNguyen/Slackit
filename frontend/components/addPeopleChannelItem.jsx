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

  _handleClose: function(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  },

  _handleOpen: function(){
    ModalStyle.content.opacity = 100;
    this.refs.channelInput.focus();
  },

  _handleSubmit: function(e){
    console.log(this.props.channelId);
    if (e.nativeEvent.keyCode != 13) return;

    var email = e.currentTarget.value;
    var object = {id: this.props.channelId, email: email}

    ClientActions.createChannelUser(object);
    this.setState({modalOpen: false});

  },

  autoFocus: function(){
    setTimeout(function(){
      this.refs.channelInput.focus();
    }.bind(this), 0)
  },

  render: function(){
    return (
      <div className='add-people-button'>
        <button type='button' onClick={this._handleClick}><i className="fa fa-user-plus" aria-hidden="true"></i></button>

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