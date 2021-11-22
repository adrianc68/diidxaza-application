import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './dashboard.scss'
import Button from '../../components/Button/Button'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import AdminMenu from '../../components/admin/menu/AdminMenu'
import DashboardRouter from '../../routers/DashboardRouter'
import history from '../History/History';
import { useState } from 'react'
import Modal from '../../components/modal/Modal';


export default function Dashboard() {
    const [statusModal, setStatusModal] = useState(false);
    const [component, setComponent] = useState({
        sizeHeight: "",
        sizeWidth: "",
        title: "",
        component: <></>,
    });

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
        };
        setComponent(initialValue);
        setStatusModal(true);
    }

    return (
        <div className="dashboard-main-container">
            <Router history={history}>
                <div className="topbar-dashboard-container">
                    <Topbar>
                        <div className="dashboard-userprofile">
                            <NavLink className="link" to={
                                {
                                    pathname: "/profile/" + sessionStorage.getItem("username"),
                                    state: {
                                        id: sessionStorage.getItem("id"),
                                    }
                                }
                            }>
                                <Button styleName="text-button" text={sessionStorage.getItem("name") }>
                                </Button>
                            </NavLink>
                        </div>
                    </Topbar>
                </div >
                <div className="sidebar-dashboard-container">
                    <Sidebar />
                </div>
                <div className="userprofile-dashboard-container">
                    <DashboardRouter />
                </div>
                {sessionStorage.getItem("role") === "manager" ? <AdminMenu handleModal={handleModal}/> : null}
                {
                    statusModal && <Modal handleModal={() => setStatusModal(false)} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                        {component.object}
                    </Modal>
                }
            </Router>
        </div >
    )

}
