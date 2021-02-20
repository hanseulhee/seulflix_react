import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Login from "./routes/js/Login";
import Detail from "./routes/js/Detail";
import Movie from "./Movie";
import App from "./App";
import Freemonth from "./Freemonth";
import Signup from "./Signup";

function Link() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/movie" component={Movie} />
      <Route path="/login" component={Login} />
      <Route path="/home/:id" component={Detail} />
      <Route path="/freemonth" component={Freemonth} />
      <Route path="/signup" component={Signup} />
    </HashRouter>
  );
}

export default Link;
