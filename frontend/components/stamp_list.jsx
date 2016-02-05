var React = require('react'),
    Stamp = require('./stamp'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  render: function () {
      var stamps = this.props.stamps.map(function (stamp) {
        return <Stamp key={stamp.id} stamp={stamp}/>;
      });
      stamps = stamps.length === 0 ? "No stamps to show." : stamps;
      return (
        <div className='stamp-list'>
          {stamps}
        </div>
      );
  }
});
