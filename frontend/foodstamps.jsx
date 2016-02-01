var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Feed = require('./components/feed'),
    StampForm = require('./components/stamp_form'),
    UserShow = require('./components/user_show'),
    SessionForm = require('./components/session_form'),
    UserForm = require('./components/user_form'),
    CurrentUserStore = require('./stores/current_user'),
    SessionsApiUtil = require('./util/sessions_api_util'),
    Header = require('./components/header'),
    StampStore = require('./stores/stamp');

var App = React.createClass({
  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionsApiUtil.fetchCurrentUser();
  },

  render: function() {
    if (!CurrentUserStore.userHasBeenFetched()) {
      return <p>PLEASE WAIT</p>;
    }
    return (
      <div>
        <Header currentUser={CurrentUserStore.currentUser()}/>
        { this.props.children }
      </div>
    );
  },

});

var routes = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Feed} onEnter={_ensureLoggedIn}/>
      <Route path="login" component={ SessionForm }/>
      <Route path="users/new" component={ UserForm } />
      <Route path='users/:id' component={UserShow} onEnter={_ensureLoggedIn}/>
      <Route path='new' component={StampForm} onEnter={_ensureLoggedIn}/>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace, callback) {
  if (CurrentUserStore.userHasBeenFetched()) {
    _redirectIfNotLoggedIn();
  } else {
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }
  function _redirectIfNotLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      replace({}, "/login");
    }
    StampStore.reset();
    callback();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(routes, document.getElementById('root'));
});













// Feed / FeedItem  ?==  StampList / Stamp
// User show page and feed renders exactly the same receiving different stamps as props

// INDEX
// Component: Feed, receives props (all stamps from users followed), renders StampList with those props
// --USERS/:ID
//   Component: UserShow, receives props (all stamps from this user), renders StampList with those props
