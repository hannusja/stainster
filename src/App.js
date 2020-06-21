import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  return (
    <Router basename="/">
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/projects" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
