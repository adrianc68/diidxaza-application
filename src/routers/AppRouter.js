import Login from "../pages/InitialInteraction/Login/Login";
import Welcome from "../pages/Welcome/Welcome";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SignUp from "../pages/InitialInteraction/SignUp/SignUp";
import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Home/Dashboard";
import history from "./History";
import { useContext } from "react";
import { Context } from "../helpers/Context";
import EmailInbox from "../components/email/emailInbox/EmailInbox";

export default function AppRouter() {
  const { isLogged } = useContext(Context);

  return (
    <Router history={history}>
      {!isLogged ? (
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
          <Route exact path="/email/inbox/" component={Dashboard}/>
          <Route exact path="/email/inbox/:id" component={Dashboard} />
          <Route exact path="/email/sent/" component={Dashboard} />
          <Route exact path="/email/sent/:id" component={Dashboard} />
          <Route exact path="/email/create/" component={Dashboard}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/email" component={Dashboard} />
          <Route exact path="/discussion" component={Dashboard} />
          <Route exact path="/learning" component={Dashboard} />
          <Route exact path="/news" component={Dashboard} />
          <Route exact path="/forum" component={Dashboard} />
          <Route exact path="/dictionary" component={Dashboard} />
          <Route exact path="/songs" component={Dashboard} />
          <Route exact path="/answers/:idLesson" component={Dashboard} />
          <Route exact path="/results/:lesson" component={Dashboard} />
          <Route exact path="/history" component={Dashboard} />
          <Route exact path="/help" component={Dashboard} />
          <Route exact path="/profile/:id" component={Dashboard} />
          <Route exact path="/profile/:id/edit" component={Dashboard} />
          <Route exact path="/email/inbox/" component={Dashboard}/>
          <Route exact path="/email/inbox/:id" component={Dashboard} />
          <Route exact path="/email/sent/" component={Dashboard} />
          <Route exact path="/email/sent/:id" component={Dashboard} />
          <Route exact path="/email/create/" component={Dashboard}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      )}
    </Router>
  );
}
