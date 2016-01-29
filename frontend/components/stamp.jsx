var React = require('react'),
    CommentsIndex = require('./comments_index'),
    CommentForm = require('./comment_form');

module.exports = React.createClass({
  render: function () {
    var stamp = this.props.stamp;
    var comments = stamp.comments;
    var ageInSeconds = (Date.now() - Date.parse(this.props.stamp.created_at)) / 1000;
    var ages = [ageInSeconds, ageInSeconds/60, ageInSeconds/3600, ageInSeconds/86400, ageInSeconds/604800, ageInSeconds/31536000];
    var timeUnit = {0: "s", 1: "m", 2: "h", 3: "d", 4: "w", 5: "y"};
    var age;
    for (var i = 5; i >= 0; i--) {
      if (ages[i] > 1) {
        age = Math.floor(ages[i]) + timeUnit[i];
        break;
      }
    }
    return (
      <div className='stamp'>
        <section className='stamp-head group'>
          <div className='thumb'>
            <img src={stamp.thumb_avatar}/>
          </div>
          <a href={'#/users/' + stamp.user_id}>{stamp.username}</a>
          <div className='stamp-age'>{age}</div>
        </section>
        <img src={stamp.image_url}/>
        <section className='stamp-body'>
          <a href={'#/users/' + stamp.user_id}>{stamp.username}</a>{stamp.body}
          <CommentsIndex comments={comments} />
          <CommentForm stamp={stamp} />
        </section>
      </div>
    );
  }
});
