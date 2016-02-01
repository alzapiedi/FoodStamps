var React = require('react'),
    StringUtil = require('../util/string_util');

module.exports = React.createClass({

  render: function () {
    var comments = this.props.comments.map(function (comment) {
      htmlString = StringUtil.parseComment(comment);
      return (
        <article key={comment.id} className='comment'>
          <a href={'#/users/' + comment.user_id}>{comment.username}</a>
          <p className='comment-body' dangerouslySetInnerHTML={{__html: htmlString}}></p>
        </article>
      );
    });
    return (
      <div className='comments group'>
        {comments}
      </div>
    );
  }
});
