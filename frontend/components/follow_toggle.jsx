var React = require('react'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {disabled: false};
  },
  toggleFollow: function () {
    this.setState({disabled: true});
    if (this.props.user.follows) {
      ApiUtil.unfollow(this.props.user.id, this.enableButton);
    } else {
      ApiUtil.follow(this.props.user.id, this.enableButton);
    }
  },
  enableButton: function () {
    this.setState({disabled: false});
  },
  render: function () {
    var user = this.props.user;
    var disabled = this.state.disabled;
    var btnText = user.follows ? "Unfollow" : "Follow";
    return <button disabled={disabled} onClick={this.toggleFollow}>{btnText}</button>;
  }
});
