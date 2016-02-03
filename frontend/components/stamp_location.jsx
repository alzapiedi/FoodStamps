var React = require('react'),
    Feed = require('./feed'),
    StampStore = require('../stores/stamp'),
    StampList = require('./stamp_list');

module.exports = React.createClass({
  getInitialState: function () {
    return { place: "", stamps: StampStore.all() };
  },
  componentDidMount: function () {
    this.stampListener = StampStore.addListener(this.updateState);
    var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 40.725136, lng: -73.996900},
        draggable: false,
        scrollwheel: false,
        zoom: 13,
      };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    var service = new google.maps.places.PlacesService(this.map);
    service.getDetails({placeId: this.props.params.id}, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({place: place.name});
        this.map.setCenter(place.geometry.location);
        var marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location
        });
      }
    }.bind(this));
  },
  componentWillUnmount: function () {
    this.stampListener.remove();
  },
  updateState: function () {
    this.setState({stamps: StampStore.all()});
  },
  render: function () {
    return (
      <div className='location-show'>
        <div className='map-wide' ref='map'/>
        <h1 className='location-title'>{this.state.place}</h1>
        <StampList stamps={this.state.stamps}/>
      </div>
    );
  }
});
