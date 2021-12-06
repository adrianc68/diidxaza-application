import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import Forum from "../pages/Forum/Forum";
import Learning from "../pages/Learning/Learning";
import History from "../pages/History/History";
import UserProfile from "../pages/UserProfile/UserProfile";
import CheckProgress from "../components/ownuser/CheckProgress/CheckProgress";
import EditProfile from "../components/ownuser/EditProfile/EditProfile";
import ReportsMenu from "../components/admin/reportsmenu/ReportsMenu";
import AccountsMenu from "../components/admin/accountsmenu/AccountsMenu";
import AddDiscussion from "../components/forum/adddiscussion/AddDiscussion";
import AnswerSection from "../pages/Learning/AnswerSection/AnswerSection";
import ResultLesson from "../pages/Learning/Result/ResultLesson";

export default function DashboardRouter({ setNameUser }) {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home></Home>} />
      <Route
        exact
        path="/email"
        render={() => <UnderConstruction></UnderConstruction>}
      />
      <Route exact path="/forum" render={() => <Forum></Forum>} />
      <Route exact path="/learning" render={() => <Learning></Learning>} />
      <Route
        exact
        path="/dictionary"
        render={() => <UnderConstruction></UnderConstruction>}
      />
      <Route
        exact
        path="/songs"
        render={() => <UnderConstruction></UnderConstruction>}
      />
      <Route exact path="/history" render={() => <History></History>} />
      <Route
        exact
        path="/help"
        render={() => <UnderConstruction></UnderConstruction>}
      />

      <Route
        exact
        path="/profile/:id"
        render={(props) => (
          <UserProfile accountProps={props.location.state}></UserProfile>
        )}
      />
      <Route
        exact
        path="/profile/:id/progress"
        render={() => <CheckProgress></CheckProgress>}
      />
      <Route
        exact
        path="/profile/:id/edit"
        render={() => <EditProfile setNameUser={setNameUser}></EditProfile>}
      />

      <Route
        exact
        path="/discussion"
        render={() => <AddDiscussion></AddDiscussion>}
      />
      <Route
        exact
        path="/user-reports"
        render={() => <ReportsMenu></ReportsMenu>}
      />
      <Route
        exact
        path="/user-accounts"
        render={() => <AccountsMenu></AccountsMenu>}
      />
      <Route
        exact
        path="/answers/:idLesson"
        render={(props) => (
          <AnswerSection lesson={props.location.state.lesson}></AnswerSection>
        )}
      />
      <Route
        exact
        path="/results/:lesson"
        render={(props) => (
          <ResultLesson
            resultsQuestions={props.location.state.resultsQuestions}
            lesson={props.location.state.lesson}
            pointsObtained={props.location.state.pointsObtained}
          ></ResultLesson>
        )}
      />
    </Switch>
  );
}
