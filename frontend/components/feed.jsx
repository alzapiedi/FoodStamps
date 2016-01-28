var React = require('react'),
    FeedStore = require('../stores/feed'),
    StampList = require('./stamp_list'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {stamps: FeedStore.all()};
  },
  componentDidMount: function () {
    this.feedListener = FeedStore.addListener(this.updateState);
    ApiUtil.fetchFeed(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.feedListener.remove();
  },
  updateState: function () {
    this.setState({stamps: FeedStore.all()});
  },
  render: function () {
    if (!this.state.stamps || this.state.stamps.length === 0) { return <div className='stamp-list-none'>No stamps to show</div>; }
      return <StampList stamps={this.state.stamps} />;
  }
});
