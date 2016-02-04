var React = require('react'),
    Modal = require('react-modal'),
    CommentsIndex = require('./comments_index'),
    FollowToggle = require('./follow_toggle'),
    LikeToggle = require('./like_toggle'),
    CommentForm = require('./comment_form');



var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    width             : '100%',
    height            : '100%',
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    width                      : '835px',
    height                     : '500px',
    transform                  : 'translateX(-50%) translateY(-50%)',
    border                     : 0,
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : 0,
    outline                    : 'none',
    padding                    :  0

  }
};





module.exports = React.createClass({
  getInitialState: function () {
    return { modalView: false, modalStamp: null };
  },
  openModal: function (stamp) {
    return function () {
      this.setState({ modalView: true, modalStamp: stamp});
    }.bind(this);
  },
  closeModal: function () {
    this.setState({modalView: false});
  },
  render: function () {
    var grid = this.props.stamps.map(function (stamp) {
      return (
        <div key={stamp.id} className='stamp-grid-container' onClick={this.openModal(stamp)}>
          <div className='stamp-grid-info'>
            <div className='stamp-grid-stats'>
              <i className="fa fa-heart"></i>{stamp.likes}<i className="fa fa-comment"></i>{stamp.comments.length}
            </div>
          </div>
          <img className='stamp-grid-size' src={stamp.small_image_url}/>
        </div>
        );
    }.bind(this));
    var modal = "";
    var thumb = "";
    var comments = [];
    var likes = 0;
    var locName, locId, stamp, ageInSeconds, ages, timeUnit, age, links, likesText;
    if (this.state.modalStamp) {
      stamp = this.state.modalStamp;
      modal = stamp.modal_image_url;
      comments = stamp.comments;
      thumb = stamp.thumb_avatar;
      locName = stamp.location_name;
      locId = stamp.location_id;
      likes = stamp.likes;
      likesText = stamp.likes === 1 ? " like" : " likes";
      ageInSeconds = (Date.now() - Date.parse(stamp.created_at)) / 1000;
      ages = [ageInSeconds, ageInSeconds/60, ageInSeconds/3600, ageInSeconds/86400, ageInSeconds/604800, ageInSeconds/31536000];
      timeUnit = {0: "s", 1: "m", 2: "h", 3: "d", 4: "w", 5: "y"};
      for (var i = 5; i >= 0; i--) {
        if (ages[i] > 1) {
          age = Math.floor(ages[i]) + timeUnit[i];
          break;
        }
      }
      if (locId) {
        links = (
          <div className='modal-head-links'>
            <a className='stamp-user-modal' href={'#/users/' + stamp.user_id}>{stamp.username}</a>
            <a className='stamp-location-modal' href={'#/locations/' + locId}>{locName}</a>
          </div>
        );
      } else {
        links = (
          <div className='modal-head-links'>
            <a className='stamp-user-modal' href={'#/users/' + stamp.user_id}>{stamp.username}</a>
          </div>
        );
      }
    }
    return (
      <div className='stamp-grid group'>
        {grid}
        <Modal isOpen={this.state.modalView} onRequestClose={this.closeModal} style={customStyles}>
          <div className='stamp-modal group'>
            <img className='stamp-modal-size' src={modal}/>
            <div className='modal-right'>
              <section className='modal-header group'>
                <div className='thumb-2'>
                  <img src={thumb}/>
                </div>
                {links}
              </section>
              <section className='modal-stats group'>
                <span className='stamp-likes-modal'>
                  {likes + likesText}
                </span>
                <div className='stamp-age-modal'>{age}</div>
              </section>
              <section className='modal-comments'>
                <CommentsIndex comments={comments} />
              </section>
              <section className='modal-inputs'>
                <div className='stamp-like-comment group'>
                  <LikeToggle stamp={this.state.modalStamp} />
                  <CommentForm stamp={this.state.modalStamp} />
                </div>
              </section>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
});
