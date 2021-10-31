import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Main page</h1>
          <Link to="/create">To create page</Link>
        </Route>
        <Route exact path="/create">
          <h1>Create page</h1>
          <Link to="/">To main page</Link>
        </Route>
        <Route exact path="/competitions/:competitionId"></Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
