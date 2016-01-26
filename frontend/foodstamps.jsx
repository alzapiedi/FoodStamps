var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    StampForm = require('./components/stamp_form'),
    UserShow = require('./components/user_show');

var App = React.createClass({
  render: function () {
    return this.props.children;
  }
});

var routes = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={StampForm}/>
      <Route path='users/:id' component={UserShow}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(routes, document.getElementById('root'));
});

// Feed / FeedItem  ?==  StampList / Stamp
// User show page and feed renders exactly the same receiving different stamps as props

// INDEX
// Component: Feed, receives props (all stamps from users followed), renders StampList with those props
// --USERS/:ID
//   Component: UserShow, receives props (all stamps from this user), renders StampList with those props
