var React = require('react'),
    CommentsIndex = require('./comments_index'),
    CommentForm = require('./comment_form'),
    ApiUtil = require('../util/api_util'),
    LikeToggle = require('./like_toggle');

module.exports = React.createClass({
  toggleLike: function () {
    if (this.props.stamp.liked) {
      ApiUtil.destroyLike(this.props.stamp.id);
    } else {
      ApiUtil.createLike(this.props.stamp.id);
    }
  },
  doubleClick: function () {
    var stamp = this.props.stamp;
    if (!stamp.liked) {
      this.toggleLike();
      $('.stamp-image-' + stamp.id).addClass('animate');
      setTimeout(function () {
        $('.stamp-image-' + stamp.id).removeClass('animate');
      }, 500);
    }
  },
  render: function () {
    var stamp = this.props.stamp;
    var locName = stamp.location_name;
    var locId = stamp.location_id;
    var comments = stamp.comments;
    var likes = stamp.likes === 1 ? " like" : " likes";
    var ageInSeconds = (Date.now() - Date.parse(this.props.stamp.created_at)) / 1000;
    var ages = [ageInSeconds, ageInSeconds/60, ageInSeconds/3600, ageInSeconds/86400, ageInSeconds/604800, ageInSeconds/31536000];
    var timeUnit = {0: "s", 1: "m", 2: "h", 3: "d", 4: "w", 5: "y"};
    var age, links;
    for (var i = 5; i >= 0; i--) {
      if (ages[i] > 1) {
        age = Math.floor(ages[i]) + timeUnit[i];
        break;
      }
    }
    if (locId) {
      links = (
        <div className='stamp-head-links'>
          <a className='stamp-user' href={'#/users/' + stamp.user_id}>{stamp.username}</a>
          <a className='stamp-location' href={'#/locations/' + locId}>{locName}</a>
        </div>
      );
    } else {
      links = (
        <div className='stamp-head-links'>
          <a className='stamp-user' href={'#/users/' + stamp.user_id}>{stamp.username}</a>
        </div>
      );
    }
    return (
      <div className='stamp'>
        <section className='stamp-head group'>
          <div className='thumb'>
            <img src={stamp.thumb_avatar}/>
          </div>
          {links}
          <div className='stamp-age'>{age}</div>
        </section>
        <div className={'stamp-image stamp-image-' + stamp.id}>
          <img src={stamp.feed_image_url} onDoubleClick={this.doubleClick}/>
        </div>
        <section className='stamp-body'>
          <span className='likes'>
            {stamp.likes + likes}
          </span>
          <CommentsIndex comments={comments} />
          <div className='stamp-like-comment group'>
            <LikeToggle stamp={stamp} />
            <CommentForm stamp={stamp} />
          </div>
        </section>
      </div>
    );
  }
});
