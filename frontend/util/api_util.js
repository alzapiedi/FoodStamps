var UserActions = require('../actions/user');
module.exports = {
  createStamp: function (stamp) {
    $.ajax({
      type: "POST",
      url: "api/stamps",
      dataType: "json",
      data: {stamp: stamp},
      success: function (stamp) {

      }
    });
  },
  fetchUser: function (id) {
    $.ajax({
      type: "GET",
      url: "api/users/" + id,
      dataType: "json",
      success: function (user) {
        UserActions.addUser(user);
      }
    });
  }
};
