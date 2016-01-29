var React = require('react'),
    CurrentUserStore = require('../stores/current_user');

module.exports = React.createClass({
  render: function () {
    var user = this.props.currentUser;
    if (!user.id) { return <div></div>; }
    return (
      <header className='header'>
        <nav className='header-nav group'>
          <h1 className="header-logo">
            <a href="#">FoodStamps</a>
          </h1>

          <div className='header-search'>
            <input type='text' placeholder="Search"/>
          </div>

          <div className='header-profile group'>
            <a className='header-new' href='#/new'><i className="fa fa-camera-retro fa-2x"></i></a>
            <a className='header-profile-link' href={'#/users/' + user.id}>{user.username}</a>
          </div>
        </nav>
      </header>
    );
  }
});
