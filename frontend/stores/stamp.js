var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    StampConstants = require('../constants/stamp'),
    CurrentUserStore = require('./current_user'),
    StampStore = new Store(AppDispatcher),
    _hasBeenFetched = false;
    _stamps = [];

StampStore.all = function () {
  return _stamps.slice();
};

StampStore.find = function (stamp_id) {
  for (var i = 0; i < _stamps.length; i++) {
    if (_stamps[i].id === stamp_id) {
      return i;
    }
  }
  return -1;
};

StampStore.hasBeenFetched = function () {
  return _hasBeenFetched;
};

StampStore.reset = function () {
  _stamps = [];
  _hasBeenFetched = false;
};

StampStore.__onDispatch = function (payload) {
  var idx;
  if (payload.actionType === StampConstants.UPDATE_FEED) {
    _stamps = payload.feed;
    _hasBeenFetched = true;
    StampStore.__emitChange();
  } else if (payload.actionType === StampConstants.ADD_COMMENT) {
    idx = StampStore.find(payload.stamp.id);
    _stamps[idx].comments.push(payload.comment);
    StampStore.__emitChange();
  } else if (payload.actionType === StampConstants.ADD_LIKE) {
    idx = StampStore.find(payload.stampId);
    _stamps[idx].likes += 1;
    _stamps[idx].liked = true;
    StampStore.__emitChange();
  } else if (payload.actionType === StampConstants.REMOVE_LIKE) {
    idx = StampStore.find(payload.stampId);
    _stamps[idx].likes -= 1;
    _stamps[idx].liked = false;
    StampStore.__emitChange();
  }
};

module.exports = StampStore;
window.StampStore = StampStore;
