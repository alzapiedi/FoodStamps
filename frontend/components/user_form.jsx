var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();

    var attrs = $(e.currentTarget).serializeJSON();
    ApiUtil.createUser(attrs, function () {
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
          <button>Sign Up</button>
        </form>
        <div className='errors'>

        </div>
        <div className='form-message'>
          Already have an account? <a href='#/login'>Click here</a> to log in.
        </div>
      </div>
    );
  }
});
