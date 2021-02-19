import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Login from "./routes/js/Login";
import Detail from "./routes/js/Detail";
import Movie from "./Movie";
import App from "./App";
import Home from "./Home";

function Link() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/movie" component={Movie} />
      <Route path="/login" component={Login} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default Link;
