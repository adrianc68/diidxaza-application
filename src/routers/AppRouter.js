import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/InitialInteraction/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Settings from '../pages/Settings/Settings'
import SignUp from '../pages/InitialInteraction/SignUp/SignUp'
import CheckProgress from '../components/ownuser/CheckProgress/CheckProgress'
import DeleteAccount from '../components/ownuser/DeleteAccount/DeleteAccount'
import BackgroundStars from '../components/animation/backgroundstars/BackgroundStars';
import LoadingScreen from '../components/animation/loadingScreen/LoadingScreen';
import UserReports from '../components/admin/userreports/UserReports';
import Modal from '../components/modal/Modal';
import BlockUser from '../components/admin/blockuser/BlockUser';
import UnblockUser from '../components/admin/unblockuser/UnblockUser';
import Forum from '../pages/Forum/Forum';

import Sidebar from '../components/sidebar/Sidebar'
import UserProfile from '../pages/UserProfile/UserProfile';
import AddDiscussion from '../components/forum/adddiscussion/AddDiscussion';


export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/login" component={Login} />


                <Route exact path="/animation" component={BackgroundStars}/> 
                <Route exact path="/animation2" component={LoadingScreen}/> 
            
                <Route exact path="/userprofile" component={UserProfile} />

                <Route exact path="/adddiscusion" component={AddDiscussion} />

                <Route exact path="/settings" component={Settings} />
                <Route exact path="/checkprogress" component={CheckProgress}/> 
                <Route exact path="/deleteaccount" component={DeleteAccount}/> 
                <Route exact path="/userReports" component={UserReports}/> 
                <Route exact path="/Modal" component={Modal}/> 
                <Route exact path="/Blockuser" component={BlockUser}/> 
                <Route exact path="/unblockuser" component={UnblockUser}/> 
                <Route exact path="/forum" component={Forum}/> 
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}
