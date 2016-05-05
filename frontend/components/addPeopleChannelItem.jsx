var React = require('react');
var Modal = require('react-modal');
var ModalStyle = require('./style/modal_style');
var ClientActions = require('../actions/client_actions');
var ChannelStore = require('../stores/channel_store');

var AddPeopleChannelItem = React.createClass({
  getInitialState: function(){
    return(
      {modalOpen: false,
       current_channel: [{public: true}]}
    );
  },

  componentDidMount: function() {
    this.addChannelListener = ChannelStore.addListener(this._channelUpdated);
    ClientActions.fetchSingleChannel(this.props.channelId);
  },

  _channelUpdated: function(){
    this.setState({current_channel: ChannelStore.currentChannel()})
  },

  componentWillUnmount: function() {
    this.addChannelListener.remove();
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
    if (e.nativeEvent.keyCode != 13) return;

    var email = e.currentTarget.value;
    var object = {id: this.props.channelId, email: email}

    ClientActions.createChannelUser(object);
    this.setState({modalOpen: false});

  },

  render: function(){
    var addPeopleButton;

    if (this.state.current_channel[0] === undefined || this.state.current_channel[0].public){
      addPeopleButton = <div></div>
    } else {
      addPeopleButton = 
        <div>
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
    }
    return (
      <div className='add-people-button'>
        {addPeopleButton}
      </div>
    );
  }
});

module.exports = AddPeopleChannelItem;