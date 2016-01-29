var UserActions = require('../actions/user'),
    CurrentUserActions = require('../actions/current_user'),
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
        UserActions.addUser(user);
      }
    });
  },
  createUser: function (attrs, callback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: attrs,
      success: function (user) {
        UserActions.addUser(user);
        CurrentUserActions.receiveCurrentUser(user);
        callback && callback();
      }
    });
  },
  fetchFeed: function () {
    $.ajax({
      type: "GET",
      url: "api/feed",
      dataType: "json",
      success: function (feed) {
        console.log(feed);
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
  },
  createComment: function (comment, cb) {
    var stamp = comment.stamp;
    $.ajax({
      type: "POST",
      url: "api/stamps/" + stamp.id + "/comments",
      dataType: "json",
      data: comment,
      success: function (comment) {
        FeedActions.addComment(comment, stamp);
        cb();
        // CommentActions.addComment(comment);
        // callback && callback();
      }
    });
  }
};
