import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import MainPage from "./MainPage/MainPage";
import CreateCompetition from "./components/CreateCompetition/CreateCompetition";
import CompetitionsPage from "./CompetitionsPage/CompetitionsPage";
import "./App";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Main page</h1>
          <Link to="/create">Go to the create page</Link>
          <MainPage />
        </Route>
        <Route exact path="/create">
          <Link to="/">Go to the main page</Link>
          <CreateCompetition title="Create contest" />
        </Route>
        <CompetitionsPage />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
