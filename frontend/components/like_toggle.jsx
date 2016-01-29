var React = require('react'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  like: function () {
    ApiUtil.createLike(this.props.stamp.id);
  },
  unlike: function () {
    ApiUtil.destroyLike(this.props.stamp.id);
  },
  render: function () {
    var stamp = this.props.stamp;
    if (stamp.liked) {
      return <button className='unlike-button' onClick={this.unlike}><i className="fa fa-heart fa-2x"></i></button>;
    }
    else {
      return <button className='like-button' onClick={this.like}><i className="fa fa-heart-o fa-2x"></i></button>;
    }
  }
});
