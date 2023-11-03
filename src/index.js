import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

console.log("index")
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
