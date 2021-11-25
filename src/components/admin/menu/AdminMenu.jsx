import React, { useState } from 'react'
import './adminmenu.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { MdOutlineBugReport, MdSupervisorAccount } from 'react-icons/md'
import { FaGripLinesVertical } from 'react-icons/fa'
import ReportsMenu from '../reportsmenu/ReportsMenu';
import AccountsMenu from '../accountsmenu/AccountsMenu';

export default function AdminMenu({ handleModal }) {
    const { t } = useTranslation();
    const adminmenuCollapsed = localStorage.getItem('adminmenubar-collapsed');
    const [isExpanded, setIsExpanded] = useState(adminmenuCollapsed ? false : true);

    function toggleAdminMenubar(e) {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('adminmenubar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('adminmenubar-collapsed');
    }

    function handleModalAndMenu(component, title) {
        handleModal(component, "550px", "80vw", title);
        toggleAdminMenubar();
    }

    return (
        <nav className={isExpanded ? "adminmenubar" : "adminmenubar active"}>
            <div className="adminmenubar-toggle-button-container">
                <button className="adminmenubar-toggle-button" onClick={toggleAdminMenubar}>
                    <FaGripLinesVertical className="adminmenubarIconToggle" />
                </button>
            </div>
            <ul>
                <li onClick={() => handleModalAndMenu(<ReportsMenu></ReportsMenu>, t("AdminReportMenu"))}>
                    <div className="adminmenubar-link">
                        <MdOutlineBugReport className="adminmenubarIcon" />
                        <span>{t("AdminMenuReports")}</span>
                    </div>
                </li>
                <li onClick={ () => handleModalAndMenu(<AccountsMenu></AccountsMenu>, t("AdminAccountMenu"))}>
                    <div className="adminmenubar-link">
                        <MdSupervisorAccount className="adminmenubarIcon" />
                        <span>{t("AdminMenuAccounts")}</span>
                    </div>
                </li>
            </ul>
        </nav >
    )
}
