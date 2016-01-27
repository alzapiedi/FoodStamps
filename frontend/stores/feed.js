var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FeedConstants = require('../constants/feed'),
    FeedStore = new Store(AppDispatcher),
    _feed = [];

FeedStore.__onDispatch = function (payload) {
  if (payload.actionType === FeedConstants.UPDATE_FEED) {
    _feed = payload.feed;
    FeedStore.__emitChange();
  }
};

FeedStore.all = function () {
  return _feed.slice();
};

module.exports = FeedStore;

window.FeedStore = FeedStore;
window._feed = _feed;
