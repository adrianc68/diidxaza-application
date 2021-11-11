import { Component } from 'react'


import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './dashboard.scss'
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
import HomeDirectory from '../../components/home/Home';
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import ReportsMenu from '../../components/admin/reportsmenu/ReportsMenu'
import AdminMenu from '../../components/admin/menu/AdminMenu'
import AccountsMenu from '../../components/admin/accountsmenu/AccountsMenu'
import Learning from '../Learning/Learning'
import DashboardRouter from '../../routers/DashboardRouter'


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <div className="dashboard-main-container">
                <div className="topbar-dashboard-container">
                    <Topbar>
                    <div className="dashboard-userprofile">
                {/* ON CLICK DISPLAY USER PROFILE */}
                    <NavLink className="link" to="/userprofile">
                            <Button styleName="text-button" text="Angel Adrian Camal Garcia">
                    </Button>
                    </NavLink>
                </div>
            </Topbar>
                </div >
                <div className="sidebar-dashboard-container">
                    <Sidebar />
                </div>
                <div className="userprofile-dashboard-container">
                    {this.props.children}
                </div>
            </div >
        )
    }
}

export default withTranslation()(Dashboard)