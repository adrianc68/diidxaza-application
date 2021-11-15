import Login from '../pages/InitialInteraction/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import SignUp from '../pages/InitialInteraction/SignUp/SignUp'



import Sidebar from '../components/sidebar/Sidebar'
import UserProfile from '../pages/UserProfile/UserProfile';
import AddDiscussion from '../components/forum/adddiscussion/AddDiscussion';
import LessonListItem from '../components/learning/lessonlistitem/LessonListItem';
import Lesson from '../components/learning/lesson/Lesson';
import LessonResults from '../components/learning/lessonresults/LessonResults';
import AnswerSection from '../pages/Learning/AnswerSection/AnswerSection';
import AdminMenu from '../components/admin/menu/AdminMenu';
import EditProfile from '../components/ownuser/EditProfile/EditProfile';
import ReportsMenu from '../components/admin/reportsmenu/ReportsMenu';
import Report from '../components/admin/reportsmenu/report/Report';
import AccountsMenu from '../components/admin/accountsmenu/AccountsMenu';
import ReportUser from '../components/anotheruser/reportuser/ReportUser';
import CheckProgress from '../components/ownuser/CheckProgress/CheckProgress'
import DeleteAccount from '../components/ownuser/DeleteAccount/DeleteAccount'
import BackgroundStars from '../components/animation/backgroundstars/BackgroundStars';
import LoadingScreen from '../components/animation/loadingScreen/LoadingScreen';
import UserReports from '../components/admin/userreports/UserReports';
import Modal from '../components/modal/Modal';
import BlockUser from '../components/admin/blockuser/BlockUser';
import UnblockUser from '../components/admin/unblockuser/UnblockUser';
import Settings from '../pages/Settings/Settings'
import Forum from '../pages/Forum/Forum';
import Learning from '../pages/Learning/Learning';
import History from '../pages/History/History'
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction'



import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Home/Dashboard'
import Home from '../components/home/Home'


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {/* IF USER IS LOGGED THEN RENDER WELCOME COMPONENT ELSE
                    RENDER HOME
                */}
                {/* <Redirect exact={true} from={"/"} to={"/dashboard"}/> */}
                <Route exact path="/" component={Welcome} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/login" component={Login} />

                {/* IS THIS A GOOD APROXIMATION? OR SHOULD USE INNER SWITCH ? */}

                <Route exact path="/discussion" render = {() => <Dashboard><AddDiscussion></AddDiscussion></Dashboard>} />
                <Route exact path="/home" render = {() => <Dashboard><Home></Home></Dashboard>} />
                <Route exact path="/email" render={() => <Dashboard><UnderConstruction></UnderConstruction></Dashboard>} />
                <Route exact path="/forum" render={() => <Dashboard><Forum></Forum></Dashboard>} />
                <Route exact path="/learning" render={() => <Dashboard><Learning></Learning></Dashboard>} />
                <Route exact path="/news" render={() => <Dashboard><UnderConstruction></UnderConstruction></Dashboard>} />
                <Route exact path="/dictionary" render={() => <Dashboard><UnderConstruction></UnderConstruction></Dashboard>} />
                <Route exact path="/songs" render={() => <Dashboard><UnderConstruction></UnderConstruction></Dashboard>} />
                <Route exact path="/history" render={() => <Dashboard><History></History></Dashboard>} />

                <Route exact path="/help" render={() => <Dashboard><UnderConstruction></UnderConstruction></Dashboard>} />
                <Route exact path="/userprofile" render={() => <Dashboard><UserProfile></UserProfile></Dashboard>} />

|


                <Route component={PageNotFound} />

            </Switch>
        </Router>
    );
}
