import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./dashboard.scss";
import Button from "../../components/Button/Button";
import { Router, Redirect } from "react-router-dom";
import AdminMenu from "../../components/admin/menu/AdminMenu";
import DashboardRouter from "../../routers/DashboardRouter";
import { useTranslation } from "react-i18next";
import { MdLogout } from "react-icons/md";
import { useHistory } from "react-router";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import { RESPONSE_STATUS } from "../../helpers/Response";
import { Context } from "../../helpers/Context";
import ModalContextProvider from "../../helpers/ModalContext";

export default function Dashboard() {
    const { t } = useTranslation();
    const history = useHistory();
    const { isLogged, setLogged } = useContext(Context);
    const [nameUser, setNameUser] = useState(sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"));
    const [isLoadedData, setLoadedData] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        setLogged(false);
        history.push({
            pathname: "/login"
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
                switch (response.status) {
                    case RESPONSE_STATUS.NOT_FOUND:
                    case RESPONSE_STATUS.INSUFFICIENT_SPACE:
                    case RESPONSE_STATUS.UNAUTHORIZED:
                    case RESPONSE_STATUS.BAD_REQUEST:
                    case RESPONSE_STATUS.FORBIDDEN:
                    case RESPONSE_STATUS.CONFLICT:
                    case RESPONSE_STATUS.ERROR_INTERNAL_SERVER:
                        setLogged(false);
                        break;
                    default:
                        setLogged(true);
                        setLoadedData(true);
                }
            }
        });
    };

    useEffect(() => {
        fetchValidateToken();
    }, []);

    return (
        <ModalContextProvider >
            {
                isLogged ?
                    isLoadedData &&
                    < div className="dashboard-main-container" >
                        <Router history={history}>
                            <div className="topbar-dashboard-container">
                                <Topbar>
                                    <div className="dashboard-userprofile">

                                        <Button styleName="text-button" text={nameUser} onClick={() => history.push(
                                            {
                                                pathname: "/profile/" + sessionStorage.getItem("username"),
                                                state: {
                                                    id: sessionStorage.getItem("id"),
                                                }
                                            }
                                        )}></Button>
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
                                <DashboardRouter setNameUser={setNameUser}></DashboardRouter>
                            </div>
                            {sessionStorage.getItem("role") === "manager" ? <AdminMenu /> : null}
                        </Router>
                    </div >
                    :
                    <Redirect exact to={"/login"} />
            }
        </ModalContextProvider >
    );
}
