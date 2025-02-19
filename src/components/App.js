import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {

  console.log("app")
  return <div>
    <NavBar />
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/directors" exact><Directors /></Route>
      <Route path="/Movies" exact><Movies /></Route>
      <Route path="/actors" exact><Actors /></Route>
    </Switch>


  </div>;
}

export default App;
