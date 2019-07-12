import React from "react";
import { compose } from "recompose";
import { Route, Switch, withRouter } from "react-router-dom";
import MainPage from "./containers/MainPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
  </Switch>
);

export default compose(withRouter)(App);
