var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='stamp'>
        <section className='stamp-head'>
          {this.props.user}
        </section>
        <img src={this.props.stamp.image_url}/>
        <section className='stamp-body'>
          {this.props.stamp.body}
        </section>
      </div>
    );
  }
});
