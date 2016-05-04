var React = require('react');
var hashHistory = require('react-router').hashHistory;

var StreamIndexItem = React.createClass({

  render: function() {

    return (
      <div className='stream-item'>
          <a href={this.props.content.url} className='stream-item'>{this.props.content.title}</a>
        <br/>
      </div>
    );
  }

});

module.exports = StreamIndexItem;
