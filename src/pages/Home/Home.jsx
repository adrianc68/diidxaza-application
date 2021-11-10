import { Component } from 'react'


import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'
import Button from '../../components/Button/Button'
import { withTranslation } from "react-i18next";

import DeleteAccount from '../../components/ownuser/DeleteAccount/DeleteAccount';
import UserReports from '../../components/admin/userreports/UserReports';
import Modal from '../../components/modal/Modal';
import BlockUser from '../../components/admin/blockuser/BlockUser';
import UnblockUser from '../../components/admin/unblockuser/UnblockUser';
import Forum from '../Forum/Forum'
import CheckProgress from '../../components/ownuser/CheckProgress/CheckProgress';
import UserProfile from '../UserProfile/UserProfile'
import Login from '../InitialInteraction/Login/Login'
import Footer from '../../components/footer/Footer'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import History from '../History/History'
import HomeDirectory from '../../components/home/HomeDirectory';
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import ReportsMenu from '../../components/admin/reportsmenu/ReportsMenu'
import AdminMenu from '../../components/admin/menu/AdminMenu'
import AccountsMenu from '../../components/admin/accountsmenu/AccountsMenu'
import Learning from '../Learning/Learning'


class Home extends Component {
    state = {
        isVisible: false,
    }
    // contentContainer = document.querySelector('userprofile-home-container');

    render() {
        const { t } = this.props;
        return (
            <div className="home-main-container">
                <div className="topbar-home-container">
                    <Topbar>
                        <div className="home-userprofile">

                            {/* <Button styleName="text-button" text="Angel Adrian Camal Garcia"
                                onClick={() => this.setState({ isVisible: true })}
                            ></Button> */}

                            <Button styleName="text-button" text="Angel Adrian Camal Garcia"
                                onClick={() => this.setState({ isVisible: true })}
                            ></Button>



                        </div>
                    </Topbar>
                </div>
                <div className="sidebar-home-container">
                    <Sidebar />
                </div>
                <div className="userprofile-home-container">
 

                <Switch>
                        {/* <Redirect exact={true} from={"/"} to={"/dashboard"}/> */}
                        <Route exact path="/home" component={HomeDirectory} />
                        <Route exact path="/history" component={History} />

                        <Route exact path="/learning" component={Learning} />
                        <Route exact path="/forum" component={Forum} />
                        <Route exact path="/underconstruction" component={UnderConstruction} />

                    </Switch>
                    
                    {/* <History/> */}
                    {/* <HomeDirectory/> */}
                    {/* <UnderConstruction/> */}
                    {/* <AdminMenu /> */}

                    {/* <ReportsMenu/> */}

                    {/* <AccountsMenu/> */}

                    {/* <Footer></Footer> */}
                    {/* <Forum></Forum> */}

                    {/* { ReactDOM.createPortal(<CheckProgress/>, this.contentContainer )} */}
                    {/* {this.state.isVisible ? <UserProfile /> : null} */}
                    {/* <UserProfile></UserProfile> */}
                    {/* <CheckProgress/> */}
                </div>
            </div>
        )
    }
}

export default withTranslation()(Home)