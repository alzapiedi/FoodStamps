var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    CurrentUserConstants = require('../constants/current_user'),
    _currentUser = {},
    _currentUserHasBeenFetched = false,
    CurrentUserStore = new Store(AppDispatcher);

    CurrentUserStore.currentUser = function () {
      return $.extend({}, _currentUser);
    };

    CurrentUserStore.isLoggedIn = function () {
      return !!_currentUser.id;
    };
  
    CurrentUserStore.userHasBeenFetched = function () {
      return _currentUserHasBeenFetched;
    };

    CurrentUserStore.__onDispatch = function (payload) {
      if (payload.actionType === CurrentUserConstants.RECEIVE_CURRENT_USER) {
        _currentUserHasBeenFetched = true;
        _currentUser = payload.currentUser;
        CurrentUserStore.__emitChange();
      }
    };

    module.exports = CurrentUserStore;
