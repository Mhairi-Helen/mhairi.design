import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/style/main.scss";
import Head from "./Head";

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
      </div>
    </Router>
  );
}

export default App;
