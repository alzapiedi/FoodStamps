var React = require('react'),
    FollowToggle = require('./follow_toggle');


// this.props.user

//  { username, follows (boolean), post_count, followers_count, following_count, me, stamps}

module.exports = React.createClass({
  /////////////////////////////////////////////DELETE THIS CRAP!!!///////////
  logOut: function () {
    $.ajax({
      type: "DELETE",
      url: "session/",
      success: function () {
        window.location.reload();
      },
      error: function () {
        window.location.reload();
      }
    });
  },
  ///////////////////////////////////////////////////////////////////////
  render: function () {
    var user = this.props.user;
    var button;
    if (user.me) {
      button = (
        <div className='user-buttons group'>
          <h1>{user.username}</h1>
          <a className='user-info-edit' href='#/edit'>Edit Profile</a>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      );
    } else {
      button = (
        <div className='user-buttons group'>
          <h1>{user.username}</h1>
          <FollowToggle user={user}/>
        </div>
      );
    }
    return (
      <div className='user-profile group'>
        <div className='profile-picture'>
          <img src={user.avatar}/>
        </div>
        <div className='user-info group'>
          {button}
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
      </div>
    );
  }

});
