var React = require('react'),
    UserStore = require('../stores/user'),
    StampStore = require('../stores/stamp'),
    ApiUtil = require('../util/api_util'),
    UserInfo = require('./user_info'),
    StampList = require('./stamp_list'),
    EditUser = require('./edit_user');

module.exports = React.createClass({
  getInitialState: function () {
    return {user: UserStore.find(this.props.params.id), feed: []};
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.updateState);
    this.feedListener = StampStore.addListener(this.updateState);
    ApiUtil.fetchUser(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
    this.feedListener.remove();
  },
  componentWillReceiveProps: function (newProps) {
    StampStore.reset();
    ApiUtil.fetchUser(newProps.params.id, function () {
      this.setState({user: UserStore.find(newProps.params.id), feed: StampStore.all()});
    }.bind(this));
  },
  updateState: function () {
    this.setState({user: UserStore.find(this.props.params.id), feed: StampStore.all()});
  },
  render: function () {
    if (!this.state.user) { return <div></div>; }
      var user = this.state.user;
      var feed = this.state.feed;
      return (
        <div>
          <UserInfo user={user}/>
          <StampList stamps={feed}/>
        </div>
      );
  }
});
