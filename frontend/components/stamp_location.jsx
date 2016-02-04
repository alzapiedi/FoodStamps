var React = require('react'),
    Feed = require('./feed'),
    StampStore = require('../stores/stamp'),
    StampList = require('./stamp_list'),
    StampListGrid = require('./stamp_list_grid');

module.exports = React.createClass({
  getInitialState: function () {
    return { place: "", stamps: StampStore.all(), view: "list" };
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
  setView: function (view) {
    return function () {
      this.setState({view: view});
    }.bind(this);
  },
  render: function () {
    if (this.state.view === "list") {
      stampView = <StampList stamps={this.state.stamps}/>;
    } else {
      stampView = <StampListGrid stamps={this.state.stamps}/>;
    }
    return (
      <div className='location-show'>
        <div className='map-wide' ref='map'/>
        <h1 className='location-title'>{this.state.place}</h1>
        <div className='view-controls-location'>
          <i onClick={this.setView("list")} className="fa fa-align-justify fa-2x"></i>
          <i onClick={this.setView("grid")} className="fa fa-th fa-2x"></i>
        </div>
        {stampView}
      </div>
    );
  }
});
