import React, { useState } from "react"
import "./sidebar.scss"
import { MdLogout, MdEmail, MdHome, MdMenu, MdBookmark, MdLiveTv, MdForum, MdMenuBook, MdLibraryMusic, MdLandscape, MdOutlineHelpOutline } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Button from "../../components/Button/Button"

export default function Sidebar() {
    const { t } = useTranslation();
    const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
    const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

    function toggleSidebar(e) {
        e.preventDefault();
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem("sidebar-collapsed", true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem("sidebar-collapsed");
    }


    return (
        <nav className={isExpanded ? "sidebar" : "sidebar active"}>
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
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/email">
                        <MdEmail className="sidebarIcon" />
                        <span>{t("SidebarCorreo")}</span>
                    </NavLink>
                </li>
                <hr className="sidebarHr"></hr>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/learning">
                        <MdBookmark className="sidebarIcon" />
                        <span>{t("SidebarLearning")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/news">
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
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/dictionary">
                        <MdMenuBook className="sidebarIcon" />
                        <span>{t("SidebarDictionary")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sidebar-link" activeClassName="activeItem" to="/songs">
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
                        <NavLink className="sidebar-link" activeClassName="activeItem" to="/help">
                            <MdOutlineHelpOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarHelp")}</span>
                        </NavLink>
                    </li>
                </div>

            </ul>
        </nav>
    )
}
