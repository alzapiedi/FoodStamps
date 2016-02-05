var AppDispatcher = require('../dispatcher/dispatcher'),
    StampConstants = require('../constants/stamp');

module.exports = {
  updateFeed: function (feed) {
    AppDispatcher.dispatch({
      actionType: StampConstants.UPDATE_FEED,
      feed: feed
    });
  },
  addComment: function (comment, stamp) {
    AppDispatcher.dispatch({
      actionType: StampConstants.ADD_COMMENT,
      comment: comment,
      stamp: stamp
    });
  },
  addLike: function (stampId) {
    AppDispatcher.dispatch({
      actionType: StampConstants.ADD_LIKE,
      stampId: stampId
    });
  },
  removeLike: function (stampId) {
    AppDispatcher.dispatch({
      actionType: StampConstants.REMOVE_LIKE,
      stampId: stampId
    });
  },
  addStamps: function (stamps) {
    AppDispatcher.dispatch({
      actionType: StampConstants.TODD_AND_LILY,
      stamps: stamps
    });
  },
  deleteComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: StampConstants.DELETE_COMMENT,
      comment: comment
    });
  }
};
