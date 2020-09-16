import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions/:category/:id" component={Questions} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
