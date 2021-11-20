import Login from '../pages/InitialInteraction/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import SignUp from '../pages/InitialInteraction/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Home/Dashboard'
import history from './History'

export default function AppRouter() {

    return (
        <Router history={history}>
            <Switch>
                {/* <Redirect exact={true} from={"/"} to={"/home"}/> */}
                <Route exact path="/" component={Welcome} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Dashboard}/>

                {/* IF USER THEN RENDER THIS */}
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
}
