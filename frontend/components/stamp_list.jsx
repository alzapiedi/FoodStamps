var React = require('react'),
    Stamp = require('./stamp');

module.exports = React.createClass({
  render: function () {
      var stamps = this.props.stamps.map(function (stamp) {
        return <Stamp key={stamp.id} stamp={stamp}/>;
      });
      return (
        <div className='stamp-list'>
          {stamps}
        </div>
      );
  }
});
