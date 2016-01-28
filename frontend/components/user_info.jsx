var React = require('react'),
    ApiUtil = require('../util/api_util');


// this.props.user

//  { username, follows (boolean), post_count, followers_count, following_count, me, stamps}

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
    return (
      <div className='user-info'>
        <div className='user-info-head group'>
          <h1>{user.username}</h1>
          <button disabled={disabled} onClick={this.toggleFollow}>{btnText}</button>
        </div>
        <div className='user-info-stats'>
          <div className='user-stat'>
            <span className='user-dark'>{user.post_count}</span>
            <span> posts</span>
          </div>
          <div className='user-stat'>
            <span className='user-dark'>{user.followers_count}</span>
            <span> followers</span>
          </div>
          <div className='user-stat'>
            <span className='user-dark'>{user.following_count}</span>
            <span> following</span>
          </div>
        </div>
      </div>
    );
  }

});
