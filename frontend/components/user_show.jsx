var React = require('react'),
    UserStore = require('../stores/user'),
    ApiUtil = require('../util/api_util'),
    UserInfo = require('./user_info'),
    StampList = require('./stamp_list');

module.exports = React.createClass({
  getInitialState: function () {
    return {user: UserStore.find(this.props.params.id)};
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.updateState);
    ApiUtil.fetchUser(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  componentWillReceiveProps: function(newProps) {
    if (!UserStore.find(newProps.params.id)) {
      ApiUtil.fetchUser(newProps.params.id);
    }
    this.setState({user: UserStore.find(newProps.params.id)});
  },
  updateState: function () {
    this.setState({user: UserStore.find(this.props.params.id)});
  },
  render: function () {
    if (!this.state.user) { return <div></div>; }
      var user = this.state.user;
      return (
        <div>
          <UserInfo user={user}/>
          <StampList stamps={user.stamps}/>
        </div>
      );
  }
});
