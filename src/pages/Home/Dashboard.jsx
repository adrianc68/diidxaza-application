import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './dashboard.scss'
import Button from '../../components/Button/Button'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import AdminMenu from '../../components/admin/menu/AdminMenu'
import DashboardRouter from '../../routers/DashboardRouter'
import history from '../History/History';

export default function Dashboard() {

    
        return (
            <div className="dashboard-main-container">
                <Router history={history}>
                    <div className="topbar-dashboard-container">
                        <Topbar>
                            <div className="dashboard-userprofile">
                                <NavLink className="link" to={"/profile/" + sessionStorage.getItem("username")}>
                                    <Button styleName="text-button" text={sessionStorage.getItem("name")}>
                                    </Button>
                                </NavLink>
                            </div>
                        </Topbar>
                    </div >
                    <div className="sidebar-dashboard-container">
                        <Sidebar />
                    </div>
                    <div className="userprofile-dashboard-container">
                        <DashboardRouter/>
                    </div>
                    {sessionStorage.getItem("role") === "manager" ? <AdminMenu /> : null}
                </Router>
            </div >
        )
    
}
