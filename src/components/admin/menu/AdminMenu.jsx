import React from 'react'
import './adminmenu.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { MdOutlineBugReport, MdSupervisorAccount } from 'react-icons/md'
import { FaGripLinesVertical } from 'react-icons/fa'
export default function AdminMenu() {
    const { t } = useTranslation();

    function toggleAdminMenubar(e) {
        e.preventDefault();
        var sidebar = document.querySelector(".adminmenubar");
        sidebar.classList.toggle("active");
    }


    return (
        <nav className="adminmenubar">
            <div className="adminmenubar-toggle-button-container">
                <button className="adminmenubar-toggle-button" onClick={toggleAdminMenubar}>
                    <FaGripLinesVertical className="adminmenubarIconToggle" />
                </button>
            </div>
            <ul>
                <li>
                    <NavLink className="adminmenubar-link" to="/home">
                        <MdOutlineBugReport className="adminmenubarIcon" />
                        <span>{t("AdminMenuReports")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="adminmenubar-link" to="/underconstruction">
                        <MdSupervisorAccount className="adminmenubarIcon" />
                        <span>{t("AdminMenuAccounts")}</span>
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}
