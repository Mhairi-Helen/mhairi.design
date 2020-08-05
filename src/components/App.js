import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/style/main.scss";
import Head from "./Head";

function App() {
  return (
    <Router>
      <Head />
    </Router>
  );
}

export default App;
