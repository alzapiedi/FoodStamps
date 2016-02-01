var React = require('react'),
    Search = require('./search'),
    ApiUtil = require('../util/api_util'),
    CurrentUserStore = require('../stores/current_user');

module.exports = React.createClass({
  render: function () {
    var user = this.props.currentUser;
    if (!user.id) { return <div></div>; }
    return (
      <header className='header'>
        <nav className='header-nav group'>
          <h1 className="header-logo">
            <a onClick={ApiUtil.fetchFeed} href="#">FoodStamps</a>
          </h1>

          <Search />

          <div className='header-profile group'>
            <a className='header-new' href='#/new'><i className="fa fa-camera-retro fa-2x"></i></a>
            <a className='header-profile-link' href={'#/users/' + user.id}>{user.username}</a>
          </div>
        </nav>
      </header>
    );
  }
});
