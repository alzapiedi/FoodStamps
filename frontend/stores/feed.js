var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FeedConstants = require('../constants/feed'),
    CurrentUserStore = require('./current_user'),
    FeedStore = new Store(AppDispatcher),
    _feed = [];

FeedStore.__onDispatch = function (payload) {
  if (payload.actionType === FeedConstants.UPDATE_FEED) {
    _feed = payload.feed;
    FeedStore.__emitChange();
  } else if (payload.actionType === "COMMENT") {
    var idx = FeedStore.find(payload.stamp.id);
    if (idx !== -1) {
      var comment = payload.comment;
      comment.username = CurrentUserStore.currentUser().username;
      _feed[idx].comments.push(comment);
      FeedStore.__emitChange();
    }
  }
};

FeedStore.all = function () {
  return _feed.slice();
};

FeedStore.find = function (id) {
  for (var i = 0; i < _feed.length; i++) {
    if (_feed[i].id === id) {
      return i;
    }
  }
  return -1;
};

module.exports = FeedStore;

window.FeedStore = FeedStore;
