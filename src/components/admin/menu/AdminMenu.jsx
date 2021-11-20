import React, { useState } from 'react'
import './adminmenu.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { MdOutlineBugReport, MdSupervisorAccount } from 'react-icons/md'
import { FaGripLinesVertical } from 'react-icons/fa'
export default function AdminMenu() {
    const { t } = useTranslation();
    const adminmenuCollapsed = localStorage.getItem('adminmenubar-collapsed');
    const [isExpanded, setIsExpanded] = useState(adminmenuCollapsed ? false : true);

    function toggleAdminMenubar(e) {
        e.preventDefault();
        if(isExpanded ) {
            setIsExpanded(false);
            localStorage.setItem('adminmenubar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('adminmenubar-collapsed');
    }

    return (
        <nav className={ isExpanded ? "adminmenubar" : "adminmenubar active"}>
            <div className="adminmenubar-toggle-button-container">
                <button className="adminmenubar-toggle-button" onClick={toggleAdminMenubar}>
                    <FaGripLinesVertical className="adminmenubarIconToggle" />
                </button>
            </div>
            <ul>
                <li>
                    <NavLink className="adminmenubar-link" to="/user-reports">
                        <MdOutlineBugReport className="adminmenubarIcon" />
                        <span>{t("AdminMenuReports")}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="adminmenubar-link" to="/user-accounts">
                        <MdSupervisorAccount className="adminmenubarIcon" />
                        <span>{t("AdminMenuAccounts")}</span>
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}
