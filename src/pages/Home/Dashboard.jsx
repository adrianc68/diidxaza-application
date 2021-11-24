import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './dashboard.scss'
import Button from '../../components/Button/Button'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import AdminMenu from '../../components/admin/menu/AdminMenu'
import DashboardRouter from '../../routers/DashboardRouter'
import history from '../History/History';
import Modal from '../../components/modal/Modal';
import { useTranslation } from "react-i18next"
import { MdLogout} from 'react-icons/md'


export default function Dashboard() {
    const { t } = useTranslation();
    const [statusModal, setStatusModal] = useState(false);
    const [nameUser, setNameUser] = useState(sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"));
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
                                <Button styleName="text-button" text={sessionStorage.getItem("username")}>
                                </Button>
                            </NavLink>
                        </div>
                        <div className="dashboard-logout-button-section">
                                <div>
                                    <Button styleName="icon-button background-red" text={t("SidebarSignOutButton")}>
                                        <MdLogout className="icon"></MdLogout>
                                    </Button>
                                </div>
                            </div>
                    </Topbar>
                </div >
                <div className="sidebar-dashboard-container">
                    <Sidebar />
                </div>
                <div className="userprofile-dashboard-container">
                    <DashboardRouter setNameUser={setNameUser} />
                </div>
                {sessionStorage.getItem("role") === "manager" ? <AdminMenu handleModal={handleModal} /> : null}
                {
                    statusModal && <Modal handleModal={() => setStatusModal(false)} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                        {component.object}
                    </Modal>
                }
            </Router>
        </div >
    )
}
