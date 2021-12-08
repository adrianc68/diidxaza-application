import Login from "../pages/InitialInteraction/Login/Login";
import Welcome from "../pages/Welcome/Welcome";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SignUp from "../pages/InitialInteraction/SignUp/SignUp";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Home/Dashboard";
import history from "./History";

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/email" component={Dashboard} />
        <Route exact path="/discussion" component={Dashboard} />
        <Route exact path="/learning" component={Dashboard} />
        <Route exact path="/news" component={Dashboard} />
        <Route exact path="/forum" component={Dashboard} />
        <Route exact path="/dictionary" component={Dashboard} />
        <Route exact path="/songs" component={Dashboard} />
        <Route exact path="/history" component={Dashboard} />
        <Route exact path="/help" component={Dashboard} />
        <Route exact path="/profile/:id" component={Dashboard} />
        <Route exact path="/profile/:id/edit" component={Dashboard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}
