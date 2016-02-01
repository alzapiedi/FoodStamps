var React = require('react');

module.exports = React.createClass({
  render: function () {
    if (!this.props.show) { return <div></div>; }
    return (
      <div className='modal'>
        <div className='modal-content'>
          This is a modal
        </div>
        <div className="modal-screen" onClick={this.props.toggleShow}></div>
      </div>
    );
  }
});
