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
    this.refs.personInput.focus();
  },

  handleEnterSubmit: function(e){
    if (e.nativeEvent.keyCode != 13) return;

    var email = e.currentTarget.value;
    var object = {id: this.props.channelId, email: email}

    ClientActions.createChannelUser(object);
    this.setState({modalOpen: false});

  },

  handleButtonSubmit: function() {
    var input = document.getElementById('add-people-input');
    var object = {id: this.props.channelId, email: input.value};
    ClientActions.createChannelUser(object);
    this.setState({modalOpen: false});
  },

  // initially renders that public is true or undefined, does't matter because it will render
  // appropriately when callback is executed in channelStore

  // to avoid the initial render - we can add third state that will track if the callback
  // has been received - if not render nothing until it returns back

  render: function(){
    var addPeopleButton;

    if (this.state.current_channel[0] === undefined || this.state.current_channel[0].public){
      addPeopleButton = <div></div>
    } else {
      addPeopleButton = 
        <div>
          <button className='add-people-button-outline' type='button' onClick={this._handleClick}><i className="fa fa-user-plus" aria-hidden="true"></i></button>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this._handleClose}
            style={ModalStyle}
            onAfterOpen={this._handleOpen}>

            <input id='add-people-input' onKeyPress={this.handleEnterSubmit} placeholder='Enter email to invite' ref='personInput'/><br/>
            <button className='add-people-modal-submit' onClick={this.handleButtonSubmit}>Submit</button>
            <button className='add-people-modal-cancel' onClick={this._handleClose}>Cancel</button>

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