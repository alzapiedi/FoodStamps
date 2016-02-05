var React = require('react'),
    StampStore = require('../stores/stamp'),
    StampList = require('./stamp_list'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    StampStore.reset();
    return {stamps: StampStore.all(), page: 1};
  },
  loadMore: function () {
    var nextPage = this.state.page + 1;
    ApiUtil.addFeedStamps(nextPage);
    this.setState({page: nextPage});
  },
  componentDidMount: function () {
    window.scrollTo(0, 0);
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
    var button;
    if (this.state.stamps.length === 0 && StampStore.hasBeenFetched()) { return <div className='stamp-list-none'>No stamps to show</div>; }
    else if (this.state.stamps.length === 0 && !StampStore.hasBeenFetched()) { return <div className='stamp-list-none'><img src="http://www.hondanorth.com/wp-content/plugins/inventory//images/spinning-wheel.gif"/></div>; }
    else {
      if (this.state.stamps.length === this.state.stamps[0].total_count) {
        button = <div></div>;
      } else {
        button = <div onClick={this.loadMore} className='load-more-button'><a>Load More</a></div>;
      }
      return (
        <div>
          <StampList stamps={this.state.stamps} />
          {button}
        </div>
      );
    }
  }
});
