import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
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
      <Route path="/" element={<Home />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/actors" element={<Actors />} />
    </Switch>


  </div>;
}

export default App;
