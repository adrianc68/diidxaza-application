import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/InitialInteraction/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Settings from '../pages/Settings/Settings'
import SignUp from '../pages/InitialInteraction/SignUp/SignUp'
import CheckProgress from '../pages/UserProfile/CheckProgress/CheckProgress'
import DeleteAccount from '../pages/UserProfile/DeleteAccount/DeleteAccount'

export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/checkprogress" component={CheckProgress}/> 
                <Route exact path="/deleteaccount" component={DeleteAccount}/> 

                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}
