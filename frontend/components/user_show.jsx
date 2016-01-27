var React = require('react'),
    UserStore = require('../stores/user'),
    ApiUtil = require('../util/api_util'),
    StampList = require('./stamp_list');

module.exports = React.createClass({
  getInitialState: function () {
    return {user: UserStore.find(this.props.params.id)};
  },
  componentDidMount: function () {
    UserStore.addListener(this.updateState);
    ApiUtil.fetchUser(this.props.params.id);
  },
  updateState: function () {
    this.setState({user: UserStore.find(this.props.params.id)});
  },
  render: function () {
    if (!this.state.user) { return <div></div>; }
      return <StampList user={this.state.user} />;
  }
});
