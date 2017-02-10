var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
// var Route = require("react-router").Route
// var Router = require("react-router").Router
// var IndexRoute = require("react-router").IndexRoute
// var hashHistory = require("react-router").hashHistory
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.querySelector("#app")
);
