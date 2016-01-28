var UserActions = require('../actions/user'),
    FeedActions = require('../actions/feed');
module.exports = {
  createStamp: function (formData, callback) {
    $.ajax({
      type: "POST",
      url: "api/stamps",
      processData: false,
      contentType: false,
      dataType: "json",
      data: formData,
      success: function (stamp) {
        callback();
      }
    });
  },
  fetchUser: function (id) {
    $.ajax({
      type: "GET",
      url: "api/users/" + id,
      dataType: "json",
      success: function (user) {
        UserActions.addUser(id, user);
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
  },
  follow: function (id, callback) {
    $.ajax({
      type: "POST",
      url: "api/users/" + id + "/follow",
      success: function (follow) {
        UserActions.follow(follow);
        callback && callback();
      }
    });
  },
  unfollow: function (id, callback) {
    $.ajax({
      type: "DELETE",
      url: "api/users/" + id + "/follow",
      success: function (follow) {
        UserActions.unfollow(follow);
        callback && callback();
      }
    });
  }
};
