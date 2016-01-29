var React = require('react');

module.exports = React.createClass({

  render: function () {
    var comments = this.props.comments.map(function (comment) {
      return (
        <article key={comment.id} className='comment'>
          <a href={'#/users/' + comment.user_id}>{comment.username}</a>
          <p className='comment-body'>{comment.body}</p>
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
