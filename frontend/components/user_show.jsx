var React = require('react'),
    UserStore = require('../stores/user'),
    StampStore = require('../stores/stamp'),
    ApiUtil = require('../util/api_util'),
    UserInfo = require('./user_info'),
    StampList = require('./stamp_list'),
    StampListGrid = require('./stamp_list_grid'),
    EditUser = require('./edit_user');

module.exports = React.createClass({
  getInitialState: function () {
    return {user: UserStore.find(this.props.params.id), feed: [], view: "grid"};
  },
  componentDidMount: function () {
    window.scrollTo(0, 0);
    this.userListener = UserStore.addListener(this.updateState);
    this.feedListener = StampStore.addListener(this.updateState);
    ApiUtil.fetchUser(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
    this.feedListener.remove();
  },
  componentWillReceiveProps: function (newProps) {
    StampStore.reset();
    window.scrollTo(0, 0);
    ApiUtil.fetchUser(newProps.params.id, function () {
      this.setState({user: UserStore.find(newProps.params.id), feed: StampStore.all()});
    }.bind(this));
  },
  updateState: function () {
    this.setState({user: UserStore.find(this.props.params.id), feed: StampStore.all()});
  },
  setView: function (view) {
    return function () {
      this.setState({view: view});
    }.bind(this);
  },
  render: function () {
    if (!this.state.user) { return <div></div>; }
      var user = this.state.user;
      var feed = this.state.feed;
      var stampView;
      if (this.state.view === "list") {
        stampView = <StampList stamps={feed}/>;
      } else {
        stampView = <StampListGrid stamps={feed}/>;
      }
      return (
        <div>
          <UserInfo user={user}/>
          <div className='view-controls-user'>
            <i onClick={this.setView("list")} className="fa fa-align-justify fa-2x"></i>
            <i onClick={this.setView("grid")} className="fa fa-th fa-2x"></i>
          </div>
          {stampView}
        </div>
      );
  }
});
