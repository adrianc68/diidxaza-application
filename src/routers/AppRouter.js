import Login from '../pages/InitialInteraction/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import SignUp from '../pages/InitialInteraction/SignUp/SignUp'
<<<<<<< HEAD
=======



import Sidebar from '../components/sidebar/Sidebar'
import UserProfile from '../pages/UserProfile/UserProfile';
import AddDiscussion from '../components/forum/adddiscussion/AddDiscussion';
import LessonListItem from '../components/learning/lessonlistitem/LessonListItem';
import LessonInformation from '../components/learning/lessoninformation/LessonInformation';
import LessonResults from '../components/learning/lessonresults/LessonResults';
import AnswerSection from '../pages/Learning/AnswerSection/AnswerSection';
import AdminMenu from '../components/admin/menu/AdminMenu';
import EditProfile from '../components/ownuser/EditProfile/EditProfile';
import ReportsMenu from '../components/admin/reportsmenu/ReportsMenu';
import Report from '../components/report/Report';
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

import React, {useState} from 'react'

>>>>>>> b675452f3dbf5392bb426f65f5e8d20f57632d5d
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
