var React = require('react'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  search: function (e) {
    window.location.hash = '';
    var query = e.target.value;
    if (query === "") {
      ApiUtil.fetchFeed();
    } else {
    ApiUtil.search(query);
    }
  },
  render: function () {
    return (
      <div className='header-search'>
        <input onKeyUp={this.search} type='text' placeholder="Search"/>
      </div>
    );
  },

});
