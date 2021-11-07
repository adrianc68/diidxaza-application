import React from 'react'
import './sidebar.scss'
import { Bookmark, HelpOutline, LibraryMusic, MenuBook, Forum, Email, LiveTv, Home, EcoOutlined, Landscape, Menu } from "@material-ui/icons"
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import Button from '../../components/Button/Button'
import { MdLogout } from 'react-icons/md'


export default function Sidebar() {
    const { t } = useTranslation();


    function toggleSidebar(e) {
        e.preventDefault();
        var sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
    }


    return (
        <nav className="sidebar">
            <div className="sidebar-toggle-button-container">
                <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                    <Menu className="sidebarIconToggle" />
                </button>
            </div>

            <ul>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/home">
                        <Home className="sidebarIcon" />
                        <span>{t("SidebarHome")}</span>
                    </NavLink>
                </li>




                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/checkprogress">
                        <Email className="sidebarIcon" />
                        <span>{t("SidebarCorreo")}</span>
                    </NavLink>
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
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/learning">
                        <Bookmark className="sidebarIcon" />
                        <span>{t("SidebarLearning")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/news">
                        <LiveTv className="sidebarIcon" />
                        <span>{t("SidebarNews")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/forum">
                        <Forum className="sidebarIcon" />
                        <span>{t("SidebarForum")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/dictionary">
                        <MenuBook className="sidebarIcon" />
                        <span>{t("SidebarDictionary")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/songs">
                        <LibraryMusic className="sidebarIcon" />
                        <span>{t("SidebarSongs")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/history">
                        <Landscape className="sidebarIcon" />
                        <span>{t("SidebarHistory")}</span>
                    </NavLink>
                </li>

                <div className="sidebar-help-details">
                    <li>
                        <NavLink className="sidebar-link" activeClassName="activeItem" to="/help">
                            <HelpOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarHelp")}</span>
                        </NavLink>
                    </li>
                </div>

            </ul>
        </nav>
    )
}
