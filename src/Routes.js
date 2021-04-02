import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Player from "./containers/player";
import Game from "./containers/Game";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path = "/Player">
        <Player />
      </Route>
      <Route exact path="/Game">
        <Game />
      </Route>
    </Switch>
  );
}
