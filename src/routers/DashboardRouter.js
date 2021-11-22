import React from 'react'
import { Switch, Route, } from 'react-router-dom';
import Home from '../components/home/Home'
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction'
import Forum from '../pages/Forum/Forum'
import Learning from '../pages/Learning/Learning'
import History from '../pages/History/History'
import UserProfile from '../pages/UserProfile/UserProfile'
import CheckProgress from '../components/ownuser/CheckProgress/CheckProgress'
import EditProfile from '../components/ownuser/EditProfile/EditProfile'

export default function DashboardRouter({}) {
    return (
        <Switch>
            <Route exact path="/home" render={() => <Home></Home>} />
            <Route exact path="/email" render={() => <UnderConstruction></UnderConstruction>} />
            <Route exact path="/forum" render={() => <Forum></Forum>} />
            <Route exact path="/learning" render={() => <Learning></Learning>} />
            <Route exact path="/news" render={() => <UnderConstruction></UnderConstruction>} />
            <Route exact path="/dictionary" render={() => <UnderConstruction></UnderConstruction>} />
            <Route exact path="/songs" render={() => <UnderConstruction></UnderConstruction>} />
            <Route exact path="/history" render={() => <History></History>} />
            <Route exact path="/help" render={() => <UnderConstruction></UnderConstruction>} />

            <Route exact path="/profile/:id" render={(props) => <UserProfile accountID={props.location.state.id}></UserProfile>} />
            <Route exact path="/profile/:id/progress" render={() => <CheckProgress></CheckProgress>} />
            <Route exact path="/profile/:id/edit" render={() => <EditProfile></EditProfile>} />

        </Switch>
    )
}
