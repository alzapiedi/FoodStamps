var AppDispatcher = require('../dispatcher/dispatcher'),
    FeedConstants = require('../constants/feed');

module.exports = {
  updateFeed: function (feed) {
    AppDispatcher.dispatch({
      actionType: FeedConstants.UPDATE_FEED,
      feed: feed
    });
  }
};
