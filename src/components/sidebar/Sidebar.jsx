import React from 'react'
import './sidebar.scss'
import { Bookmark, HelpOutline, LibraryMusic, MenuBook, Forum, Email, LiveTv, Home, EcoOutlined, Landscape, Menu } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import Button from '../../components/Button/Button'
import { MdLogout } from 'react-icons/md'


export default function Sidebar() {
    const { t } = useTranslation();


    function sayHello(e) {
        e.preventDefault();
        var sidebar = document.querySelector(".sidebar");
        console.log(sidebar);
        sidebar.classList.toggle("active");
    }


    return (
            <div className="sidebar">
                <div className="sidebar-toggle-button-container">
                    <button className="sidebar-toggle-button" onClick={sayHello}>
                        <Menu className="sidebarIconToggle" />
                    </button>
                </div>

                <ul>
                    <li>
                        <Link className="sidebar-link" to="/home">
                            <Home className="sidebarIcon" />
                            <span>{t("SidebarHome")}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="not-found">
                            <Email className="sidebarIcon" />
                            <span>{t("SidebarCorreo")}</span>
                        </Link>
                    </li>

                    <div className="sidebar-button-section">
                        <div>
                            <Button styleName="primary-button" text={t("SidebarSignOutButton")}>
                                <MdLogout></MdLogout>
                            </Button>
                        </div>

                    </div>

                    <hr className="sidebarHr"></hr>


                    <li>
                        <Link className="sidebar-link" to="/learning">
                            <Bookmark className="sidebarIcon" />
                            <span>{t("SidebarLearning")}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/news">
                            <LiveTv className="sidebarIcon" />
                            <span>{t("SidebarNews")}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/forum">
                            <Forum className="sidebarIcon" />
                            <span>{t("SidebarForum")}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/dictionary">
                            <MenuBook className="sidebarIcon" />
                            <span>{t("SidebarDictionary")}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/songs">
                            <LibraryMusic className="sidebarIcon" />
                            <span>{t("SidebarSongs")}</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/history">
                            <Landscape className="sidebarIcon" />
                            <span>{t("SidebarHistory")}</span>
                        </Link>
                    </li>
                </ul>

                <div className="sidebar-help-details">
                    <ul className="sidebar-nav-help">
                        <li>
                            <Link className="sidebar-link" to="/help">
                                <HelpOutline className="sidebarIcon" />
                                <span className="sidebarListItemText">{t("SidebarHelp")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
