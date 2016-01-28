var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user'),
    UserStore = new Store(AppDispatcher),
    _users = {};

UserStore.__onDispatch = function (payload) {
  if (payload.actionType === UserConstants.ADD_USER) {
    _users[payload.user_id] = payload.user;
    UserStore.__emitChange();
  } else if (payload.actionType === UserConstants.FOLLOW) {
    _users[payload.followee_id].follows = true;
    _users[payload.followee_id].followers_count += 1;
    UserStore.__emitChange();
  } else if (payload.actionType === UserConstants.UNFOLLOW) {
    _users[payload.followee_id].follows = false;
    _users[payload.followee_id].followers_count -= 1;
    UserStore.__emitChange();
  }
};

UserStore.find = function (id) {
  return _users[id];
};

module.exports = UserStore;

window.UserStore = UserStore;
window._users = _users;
