var React = require('react'),
    StringUtil = require('../util/string_util'),
    CurrentUserStore = require('../stores/current_user'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  deleteComment: function (comment) {
    return function () {
      ApiUtil.deleteComment(comment);
    };
  },
  render: function () {
    var button;
    var comments = this.props.comments.map(function (comment) {
      htmlString = StringUtil.parseComment(comment);
      if (comment.user_id === CurrentUserStore.currentUser().id) {
        button = <i onClick={this.deleteComment(comment)} className='delete-comment-button fa fa-times'/>;
      } else {
        button = <div></div>;
      }
      return (
        <article key={comment.id} className='comment'>
          <a href={'#/users/' + comment.user_id}>{comment.username}</a>
          <p className='comment-body' dangerouslySetInnerHTML={{__html: htmlString}}></p>
          {button}
        </article>
      );
    }.bind(this));
    return (
      <div className='comments group'>
        {comments}
      </div>
    );
  }
});
