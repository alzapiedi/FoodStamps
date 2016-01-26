var AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user');

module.exports = {
  addUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_USER,
      user: user
    });
  }
};
