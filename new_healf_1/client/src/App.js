import React from "react";
import { Route, Switch } from "react-router-dom";

import ContainerFallback from "./components/ContainerFallback/ContainerFallback";
import containers from "./containers";

const App = () => {
  return (
    <Switch>
      {containers.map(({ Component, config: { path } }) => (
        <Route component={Component} path={`/${path}`} />
      ))}
      <Route component={ContainerFallback} path="/:container?" />
    </Switch>
  );
};

export default App;
