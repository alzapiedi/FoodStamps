var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('../util/sessions_api_util');

module.exports = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON();
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  guestLogin: function (e) {
    e.preventDefault();
    var credentials = { username: "nick", password: "password" };
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function() {
    return (
      <div className='user-form'>
        <div className='form-logo'>
          FoodStamps
        </div>
        <form onSubmit={this.submit}>
          <input type='text' name='username' placeholder="Username"/>
          <input type='password' name='password' placeholder="Password"/>
          <button>Log In</button>
        </form>
        <button onClick={this.guestLogin}>Guest</button>
        <div className='errors'>

        </div>
        <div className='form-message'>
          Don't have an account? <a href='#/users/new'>Click here</a> to sign up.
        </div>
      </div>
    );
  }
});
