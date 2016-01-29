var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user');

module.exports = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};
