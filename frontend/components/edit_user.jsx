var React = require('react'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {disabled: false, imageFile: null, imageUrl: ""};
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.setState({disabled: true});
    var formData = new FormData();

    formData.append("user[avatar]", this.state.imageFile);

    ApiUtil.updateUser(formData, this.props.user.id, function () {
      ApiUtil.fetchUser(this.props.user.id);
      this.setState({disabled: false});
    }.bind(this));
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
    if (!this.props.show) { return <div></div>; }
    var imgBox;
    if (this.state.imageUrl === "") {
      imgBox = <div></div>;
    } else {
      imgBox = <img className='preview-image' width={350} src={this.state.imageUrl}></img>;
    }
    var btnText = this.state.disabled ? "Uploading" : "Upload";
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='profile-form'>
            <h1>Upload an Avatar</h1>
            <form onSubmit={this.handleSubmit}>
              <input type='file' onChange={this.changeFile}/>
              {imgBox}
              <button disabled={this.state.disabled}>{btnText}</button>
            </form>
          </div>
        </div>
        <div className="modal-screen" onClick={this.props.toggleShow}></div>
      </div>
    );
  }
});
