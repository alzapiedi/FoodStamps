var AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user');

module.exports = {
  addUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_USER,
      user: user
    });
  },
  follow: function (follow) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOLLOW,
      followee_id: follow.followee_id
    });
  },
  unfollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: UserConstants.UNFOLLOW,
      followee_id: follow.followee_id
    });
  }
};
