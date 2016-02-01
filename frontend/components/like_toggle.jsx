var React = require('react'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {disabled: false};
  },
  like: function () {
    this.setState({disable: true});
    ApiUtil.createLike(this.props.stamp.id, this.enableButton);
  },
  unlike: function () {
    this.setState({disable: true});
    ApiUtil.destroyLike(this.props.stamp.id, this.enableButton);
  },
  enableButton: function () {
    this.setState({disable: false});
  },
  render: function () {
    var stamp = this.props.stamp;
    var disabled = this.state.disabled;
    if (stamp.liked) {
      return <button className='unlike-button' onClick={this.unlike} disabled={disabled}><i className="fa fa-heart fa-2x"></i></button>;
    }
    else {
      return <button className='like-button' onClick={this.like} disabled={disabled}><i className="fa fa-heart-o fa-2x"></i></button>;
    }
  }
});
