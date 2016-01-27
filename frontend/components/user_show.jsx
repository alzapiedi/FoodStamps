var React = require('react'),
    UserStore = require('../stores/user'),
    ApiUtil = require('../util/api_util'),
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
      return <StampList stamps={this.state.user.stamps} />;
  }
});
