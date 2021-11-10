import React from 'react'
import './sidebar.scss'
import { MdLogout, MdEmail, MdHome, MdMenu, MdBookmark, MdLiveTv, MdForum, MdMenuBook, MdLibraryMusic, MdLandscape, MdOutlineHelpOutline} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import Button from '../../components/Button/Button'


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
                    <MdMenu className="sidebarIconToggle" />
                </button>
            </div>

            <ul>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/home">
                        <MdHome className="sidebarIcon" />
                        <span>{t("SidebarHome")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/underconstruction">
                        <MdEmail className="sidebarIcon" />
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
                        <MdBookmark className="sidebarIcon" />
                        <span>{t("SidebarLearning")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/underconstruction">
                        <MdLiveTv className="sidebarIcon" />
                        <span>{t("SidebarNews")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/forum">
                        <MdForum className="sidebarIcon" />
                        <span>{t("SidebarForum")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/underconstruction">
                        <MdMenuBook className="sidebarIcon" />
                        <span>{t("SidebarDictionary")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/underconstruction">
                        <MdLibraryMusic className="sidebarIcon" />
                        <span>{t("SidebarSongs")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/history">
                        <MdLandscape className="sidebarIcon" />
                        <span>{t("SidebarHistory")}</span>
                    </NavLink>
                </li>

                <div className="sidebar-help-details">
                    <li>
                        <NavLink className="sidebar-link" activeClassName="activeItem" to="/underconstruction">
                            <MdOutlineHelpOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarHelp")}</span>
                        </NavLink>
                    </li>
                </div>

            </ul>
        </nav>
    )
}
