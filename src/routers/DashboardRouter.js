import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Forum from '../pages/Forum/Forum';
import Learning from '../pages/Learning/Learning';
import History from '../pages/History/History'
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction'
// import HomeDirectory from '../components/home/Home';

export default function DashboardRouter() {
    return (
            <Switch>
                {/* <Redirect exact={true} from={"/"} to={"/dashboard"}/> */}
                {/* <Route exact path="/home" element={HomeDirectory} /> */}
                <Route exact path="/history" element={History} />
                <Route exact path="/learning" element={Learning} />
                <Route exact path="/forum" element={Forum} />
                <Route exact path="/underconstruction" element={UnderConstruction} />
            </Switch>
    )
}
