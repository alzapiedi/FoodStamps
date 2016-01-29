var AppDispatcher = require('../dispatcher/dispatcher'),
    FeedConstants = require('../constants/feed');

module.exports = {
  updateFeed: function (feed) {
    AppDispatcher.dispatch({
      actionType: FeedConstants.UPDATE_FEED,
      feed: feed
    });
  },
  addComment: function (comment, stamp, user) {
    AppDispatcher.dispatch({
      actionType: "COMMENT",
      comment: comment,
      stamp: stamp,
      user: user
    });
  }
};
