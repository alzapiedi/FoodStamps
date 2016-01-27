var React = require('react'),
    LinkedState = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  mixins: [LinkedState],
  getInitialState: function () {
    return {body: "", imageFile: null, imageUrl: ""};
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append("stamp[body]", this.state.body);
    formData.append("stamp[image]", this.state.imageFile);

    ApiUtil.createStamp(formData);
  },
  changeFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },
  render: function () {
    return (
      <div className='stamp-form'>
        <h1>Post a Stamp</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder={'Upload an Image'} type='file' onChange={this.changeFile}/>
          <img className='preview-image' width={350} src={this.state.imageUrl}></img>
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
