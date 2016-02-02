var React = require('react');

module.exports = React.createClass({
  componentDidMount: function () {
    
    var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 40.725136, lng: -73.996900},
        zoom: 13,
      };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },
  componentWillUnmount: function () {

  },
  componentDidUpdate: function () {
    google.maps.event.trigger(this.map, 'resize');
  },
  render: function () {
    var display = this.props.show ? "" : " hidden";
    return (
      <div onClick={this.props.toggleShow} className='behind-map'>
        <div className={'map-modal modal' + display}>
          <div id='map' className={'map modal-content' + display} ref='map'/>
        </div>
      </div>
    );
  }
});
