var React = require('react'),
    Stamp = require('./stamp');

module.exports = React.createClass({
  render: function () {
    var user = this.props.user.username;
    var stamps = this.props.user.stamps.map(function (stamp) {
      return <Stamp key={stamp.id} stamp={stamp} user={user}/>;
    });
    return (
      <div className='stamp-list'>
        {stamps}
      </div>
    );
  }
});
