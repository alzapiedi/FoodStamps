var UserActions = require('../actions/user'),
    CurrentUserActions = require('../actions/current_user'),
    StampActions = require('../actions/stamp');
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
        callback && callback();
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
        StampActions.updateFeed(user.stamps);
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
        StampActions.updateFeed(feed);
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
  createComment: function (comment, callback) {
    var stamp = comment.stamp;
    $.ajax({
      type: "POST",
      url: "api/stamps/" + stamp.id + "/comments",
      dataType: "json",
      data: comment,
      success: function (comment) {
        StampActions.addComment(comment, stamp);
        callback && callback();
      }
    });
  },
  createLike: function (id) {
    $.ajax({
      type: "POST",
      url: "api/stamps/" + id + "/like",
      dataType: "json",
      success: function () {
        StampActions.addLike(id);
      }
    });
  },
  destroyLike: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/stamps/" + id + "/like",
      dataType: "json",
      success: function () {
        StampActions.removeLike(id);
      }
    });
  }
};
