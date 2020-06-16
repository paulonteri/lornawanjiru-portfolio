import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Web from "./Web";
import Dog from "./Dog";
import Cyber from "./Cyber";

// TODO: Add component to be displayed on 404 errors

function Content() {
  return (
    <BrowserRouter>
      <div id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/web" component={Web} />
          <Route path="/dog" component={Dog} />
          <Route path="/cyber" component={Cyber} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Content;
