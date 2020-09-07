import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./assembly";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="index-box">
          <div className="router">
            <Switch>
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
