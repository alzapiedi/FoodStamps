var ApiUtil = require('./api_util');

module.exports = {
  findUserId: function (username, mentions) {
    for (var i = 0; i < mentions.length; i++) {
      if (mentions[i].username === username) {
        return mentions[i].user_id;
      }
    }
  },
  parseComment: function (comment) {
    var words = comment.body.split(" ");
    var commentBody = $('<p>');
    var str;
    for (var i = 0; i < words.length; i++) {
      if (words[i][0] === "#") {
        str = $('<a>');
        str.attr('href',('#/search/' + words[i].slice(1)));
        str.append(words[i]);
      } else if (words[i][0] === "@") {
        str = $('<a>');
        str.attr('href',('#/users/' + this.findUserId(words[i].slice(1), comment.mentions)));
        str.append(words[i]);
      }
      else {
        str = words[i];
      }
      commentBody.append(str);
      commentBody.append(" ");
    }
    return commentBody[0].innerHTML;
  },
};
