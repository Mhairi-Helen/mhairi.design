import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/style/main.scss";
import Head from "./Head";
import Foot from "./Foot";

function App() {
  return (
    <Router>
      <Head />
      <Foot />
    </Router>
  );
}

export default App;
