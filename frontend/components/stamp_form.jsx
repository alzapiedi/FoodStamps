var React = require('react'),
    StampLocation = require('./stamp_location'),
    LinkedState = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/api_util'),
    Modal = require('react-modal');


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
    width                      : '500px',
    height                     : '500px',
    transform                  : 'translateX(-50%) translateY(-50%)',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

module.exports = React.createClass({
  mixins: [LinkedState],
  getInitialState: function () {
    return {locName: "", imageFile: null, imageUrl: "", showMap: false, disabled: true};
  },
  openMap: function () {
    this.setState({showMap: true}, function () {
      var mapDOMNode = this.refs.map;
      var loc = this.state.taggedLocation;
      var center = loc ? {lat: loc.geometry.location.lat(), lng: loc.geometry.location.lng()} : {lat: 40.725136, lng: -73.996900};
        var mapOptions = {
          center: center,
          zoom: 13,
        };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      if (loc) {
        this.marker = new google.maps.Marker({
          map: this.map,
          position: loc.geometry.location
        });
      }
      var input = document.getElementById('location-search');
      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', this.map);
      autocomplete.addListener('place_changed', function () {
        this.marker && this.marker.setMap(null);
        var place = autocomplete.getPlace();
        this.marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location
        });
        this.map.panTo(place.geometry.location);
        this.setState({taggedLocation: place, locName: place.name});
      }.bind(this));
    }.bind(this));

  },
  closeMap: function () {
    this.setState({showMap: false});
    delete this.map;
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.setState({disabled: true});
    var formData = new FormData();
    var loc = this.state.taggedLocation;
    formData.append("stamp[body]", this.state.body);
    formData.append("stamp[image]", this.state.imageFile);
    if (loc) {
      formData.append("stamp[location_id]", loc.place_id);
      formData.append("stamp[location_name]", loc.name);
    }
    ApiUtil.createStamp(formData, function () {
      this.props.history.pushState(null, '#/');
      this.enableButton();
    }.bind(this));
  },
  enableButton: function () {
    this.setState({disabled: false});
  },
  changeFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result, disabled: false});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);// will trigger a load end event when it completes, and invoke reader.onloadend
    } else {
      this.setState({imageFile: null, imageUrl: "", disabled: true});
    }
  },
  render: function () {
    var imgBox;
    var tagLoc = this.state.taggedLocation ? this.state.taggedLocation.name : "Tag a location (optional)";
    var locName = this.state.taggedLocation ? this.state.taggedLocation.name : "";
    if (this.state.imageUrl === "") {
      imgBox = <div></div>;
    } else {
      imgBox = <img className='preview-image' width={350} src={this.state.imageUrl}></img>;
    }
    return (
      <div className='stamp-form group'>
        <h1>Post a Stamp</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.changeFile}/>
          {imgBox}
          <input placeholder={'Description'} valueLink={this.linkState("body")}/>
          <a onClick={this.openMap}>{tagLoc}</a>
          <button disabled={this.state.disabled}>Post Stamp</button>
        </form>
        <Modal isOpen={this.state.showMap} onRequestClose={this.closeMap} style={customStyles}>
          <div className='map' ref='map'/>
          <div className='map-search group'>
            <input type='text' id='location-search' placeholder='Search for a location...' valueLink={this.linkState("locName")}/>
            <button onClick={this.closeMap} disabled={!this.state.taggedLocation}>Tag This Location</button>
          </div>
        </Modal>
      </div>
    );
  }
});
