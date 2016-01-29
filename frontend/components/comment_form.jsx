var React = require('react'),
    ApiUtil = require('../util/api_util'),
    LinkedState = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedState],

  getInitialState: function () {
    return { body: "", stamp: this.props.stamp };
  },

  addComment: function (e) {
    e.preventDefault();
    ApiUtil.createComment(this.state, function () {
      this.setState({body: ""});
    }.bind(this));
  },

  render: function () {
    return (
      <div className='comment-form'>
        <form onSubmit={this.addComment}>
          <input type='text' placeholder='Add a comment...' valueLink={this.linkState("body")}/>
        </form>
      </div>
    );
  }

});
