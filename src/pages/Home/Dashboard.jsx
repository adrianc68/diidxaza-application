import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./dashboard.scss";
import Button from "../../components/Button/Button";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import AdminMenu from "../../components/admin/menu/AdminMenu";
import DashboardRouter from "../../routers/DashboardRouter";
import Modal from "../../components/modal/Modal";
import { useTranslation } from "react-i18next";
import { MdLogout } from "react-icons/md";
import { useHistory } from "react-router";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import LoadingScreen from "../../components/animation/loadingScreen/LoadingScreen";
import { RESPONSE_STATUS } from "../../helpers/Response";

export default function Dashboard() {
    const { t } = useTranslation();
    const history = useHistory();
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
    };

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        history.push({
            pathname: "login"
        });
    };

    const fetchValidateToken = () => {
        helpHttp().get(UrlAPI + "accounts/" + sessionStorage.getItem("id"), {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {

            if (response != null) {
                if (response.length > 0) {
                    // setReports(response);
                    return;
                }
                // setServerError(getMessageResponseStatus(response));
            }
            
            if (response != null) {
                switch (response.status) {
                    case RESPONSE_STATUS.NOT_FOUND:
                    case RESPONSE_STATUS.BAD_REQUEST:
                    case RESPONSE_STATUS.INSUFFICIENT_SPACE:
                    case RESPONSE_STATUS.UNAUTHORIZED:
                    case RESPONSE_STATUS.ERROR_INTERNAL_SERVER:
                        setLogged(false);
                        break;
                    default:
                        setLogged(true);
                }
            }
        });
    };

    const [isLogged, setLogged] = useState(true);

    useEffect(() => {
        fetchValidateToken();
    }, []);

    return (
        isLogged ?
            <div className="dashboard-main-container" >
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
                                    <Button styleName="text-button" text={nameUser}></Button>
                                </NavLink>
                            </div>
                            <div className="dashboard-logout-button-section">
                                <div>
                                    <Button styleName="icon-button background-red" text={t("SidebarSignOutButton")} onClick={handleLogout}>
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
            </div>
            :
            <Redirect exact to={"/login"} />
    );
}
