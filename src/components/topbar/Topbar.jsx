import React from 'react'
import './topbar.scss'
import { Settings, School } from "@material-ui/icons"
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

export default function Topbar() {
    const { t } = useTranslation();

    return (
        <>
            <div className="topbar">
                <div className="topbar-logo-details">
                    <div className="topbar-center">
                        <School className="topbarIcon" />
                        <span className="topbar-logo-name">{t("LogoName")}</span>
                    </div>
                </div>
                <div className="nav-links-container">
                    <ul className="topbar-nav-links">
                        <li className="topbar-listItem">
                            <Settings className="topbarIcon" />
                            <span className="topbar-username-text">Roberto Quiros Montesano 1</span>
                        </li>
                    </ul>
                </div>


            </div>
        </>


    )
}
