var React = require('react'),
    LinkedState = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  mixins: [LinkedState],
  getInitialState: function () {
    return {body: "", image_url: ""};
  },
  handleSubmit: function () {
    ApiUtil.createStamp(this.state);
  },
  render: function () {
    return (
      <div className='stamp-form'>
        <h1>Post a Stamp</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder={'Enter Image URL'} type='text' valueLink={this.linkState("image_url")}/>
          <textarea placeholder={'Description'} valueLink={this.linkState("body")}/>
          <button>Post Stamp</button>
        </form>
      </div>
    );
  }
});


//questions:

// API Util success call back should redirect to current user show page, is window.location.hash = ... acceptable
  // A: pass ApiUtil a callback that will use react history
    // Q: what/why

// Need separate rails api routes for fetching feed related stamps and user related stamps, how
  //A: user show page includes all stamps, resource :feed, only: :show
    // Q: should users have an api rails route for show

// When fetching from DB, should I have 2 seperate stores for user show
//   vs. feed items, or one store with 2 _objects, or 1 store 1 object
  // A: 2 stores, userstore, feedstore, each has own actions
