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
    return {searchQuery: "", imageFile: null, imageUrl: "", showMap: false, places: []};
  },
  componentDidMount: function () {

  },
  openMap: function () {
    this.setState({showMap: true}, function () {
      var mapDOMNode = this.refs.map;
        var mapOptions = {
          center: {lat: 40.725136, lng: -73.996900},
          zoom: 13,
        };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      this.markers = [];
    }.bind(this));

  },
  closeMap: function () {
    this.setState({showMap: false});
    delete this.map;
  },
  searchMap: function (e) {
    e.preventDefault();
    this.clearMarkers();
    var request = {
      query: e.target.value,
      bounds: this.map.getBounds()
    };
    var service = new google.maps.places.PlacesService(this.map);
    service.textSearch(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        this.setState({places: results});
      }
    }.bind(this));
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append("stamp[body]", this.state.body);
    formData.append("stamp[image]", this.state.imageFile);

    ApiUtil.createStamp(formData, function () {
      this.props.history.pushState(null, '#/');
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
  createMarker: function (place) {
    var position = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
    var marker = new google.maps.Marker({position: position, place_id: place.id});

    this.markers.push(marker);
    marker.setMap(this.map);
  },
  highlightMarker: function (id) {
    var idx;
    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i].place_id === id) {
        idx = i;
      }
    }
    return function () {
      this.markers[idx].setAnimation(google.maps.Animation.BOUNCE);
      this.highlighted = this.markers[idx];
    }.bind(this);
  },
  unhighlightMarker: function () {
    this.highlighted.setAnimation(null);
  },
  clearMarkers: function () {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);
    }
  },
  tagLocation: function (place) {
    return function () {
      this.setState({taggedLocation: place, showMap: false});
    }.bind(this)
  },
  render: function () {
    console.log(this.state.taggedLocation);
    var imgBox;
    if (this.state.imageUrl === "") {
      imgBox = <div></div>;
    } else {
      imgBox = <img className='preview-image' width={350} src={this.state.imageUrl}></img>;
    }
    var searchResults = this.state.places.map(function (place, i) {
      this.createMarker(place);
      return <li className='map-search-li' onClick={this.tagLocation(place)} onMouseOver={this.highlightMarker(place.id)} onMouseOut={this.unhighlightMarker} key={i}>{place.name}</li>;
    }.bind(this));
    return (
      <div className='stamp-form group'>
        <h1>Post a Stamp</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.changeFile}/>
          {imgBox}
          <textarea placeholder={'Description'} valueLink={this.linkState("body")}/>
          <a onClick={this.openMap}>Tag a location (optional)</a>
          <button>Post Stamp</button>
        </form>
        <Modal isOpen={this.state.showMap} onRequestClose={this.closeMap} style={customStyles}>
          <div className='map' ref='map'/>
          <div className='map-search group'>
            <input type='text' onChange={this.searchMap}/>
            <ul className='map-search-results'>
              {searchResults}
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
});
