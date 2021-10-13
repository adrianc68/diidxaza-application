import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Welcome from '../pages/Welcome/Welcome';
// import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Home from '../pages/Home/Home'
import SignUp from '../pages/SignUp/SignUp'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

import { Provider } from 'react-redux';


import Sidebar from '../components/sidebar/Sidebar'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/(:filter)" component={Welcome} />
                <Route component={PageNotFound} />
            </Switch>

            <Sidebar/>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/Welcome">Welcome</Link>
                    </li>
                

                </ul>
            </nav>
        </Router>


        // <Router>
        //         <Switch>
        //             <Route exact path="/Home" component={Home} />
        //             <Route exact path="/SignUp" component={SignUp} />
        //             <Route exact path="/(:filter)" component={Welcome} />
        //             <Route component={PageNotFound} />
        //         </Switch>


        // </Router>
    );
}
