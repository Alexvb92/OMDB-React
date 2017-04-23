var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Movie = require('../components/Movie');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="movie/:moviename" component={Movie} />
    <IndexRoute component={Home} />
  </Route>
);
