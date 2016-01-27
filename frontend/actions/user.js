var AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user');

module.exports = {
  addUser: function (user_id, stamps) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_USER,
      user_id: user_id,
      stamps: stamps
    });
  }
};
