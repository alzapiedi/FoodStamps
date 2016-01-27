var UserActions = require('../actions/user'),
    FeedActions = require('../actions/feed');
module.exports = {
  createStamp: function (formData) {
    $.ajax({
      type: "POST",
      url: "api/stamps",
      processData: false,
      contentType: false,
      dataType: "json",
      data: formData,
      success: function (stamp) {

      }
    });
  },
  fetchUser: function (id) {
    $.ajax({
      type: "GET",
      url: "api/users/" + id,
      dataType: "json",
      success: function (stamps) {
        UserActions.addUser(id, stamps);
      }
    });
  },
  fetchFeed: function () {
    $.ajax({
      type: "GET",
      url: "api/feed",
      dataType: "json",
      success: function (feed) {
        FeedActions.updateFeed(feed);
      }
    });
  }
};
