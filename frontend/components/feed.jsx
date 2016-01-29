var React = require('react'),
    StampStore = require('../stores/stamp'),
    StampList = require('./stamp_list'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {stamps: StampStore.all()};
  },
  componentDidMount: function () {
    this.feedListener = StampStore.addListener(this.updateState);
    ApiUtil.fetchFeed(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.feedListener.remove();
  },
  updateState: function () {
    this.setState({stamps: StampStore.all()});
  },
  render: function () {
    if (!this.state.stamps || this.state.stamps.length === 0) { return <div className='stamp-list-none'>No stamps to show</div>; }
      return <StampList stamps={this.state.stamps} />;
  }
});
