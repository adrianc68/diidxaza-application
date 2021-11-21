import Login from '../pages/InitialInteraction/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import SignUp from '../pages/InitialInteraction/SignUp/SignUp'

import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Home/Dashboard'
import history from './History'

export default function AppRouter() {
    const [nameUser, setNameUser] = useState(sessionStorage.getItem("name")+" "+sessionStorage.getItem("lastname"));
    return (
        <Router history={history}>
            <Switch>
                {/* <Redirect exact={true} from={"/"} to={"/home"}/> */}
                <Route exact path="/" component={Welcome} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Dashboard}/>
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
}
