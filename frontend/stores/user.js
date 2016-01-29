var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user'),
    CurrentUserStore = require('./current_user'),
    UserStore = new Store(AppDispatcher),
    _users = {};

UserStore.__onDispatch = function (payload) {
  if (payload.actionType === UserConstants.ADD_USER) {
    _users[payload.user.id] = payload.user;
    UserStore.__emitChange();
  } else if (payload.actionType === UserConstants.FOLLOW) {
    _users[payload.followee_id].follows = true;
    _users[payload.followee_id].followers_count += 1;
    UserStore.__emitChange();
  } else if (payload.actionType === UserConstants.UNFOLLOW) {
    _users[payload.followee_id].follows = false;
    _users[payload.followee_id].followers_count -= 1;
    UserStore.__emitChange();
  } else if (payload.actionType === "COMMENT") {
    var stamps = _users[payload.stamp.user_id].stamps;
    var idx;
    var comment = payload.comment;
    comment.username = CurrentUserStore.currentUser().username;
    for (var i = 0; i < stamps.length; i++) {
      if (stamps[i].id === payload.stamp.id) {
        stamps[i].comments.push(comment);
      }
    }
    UserStore.__emitChange();
  }
};

UserStore.find = function (id) {
  return _users[id];
};

module.exports = UserStore;

window.UserStore = UserStore;
window._users = _users;
