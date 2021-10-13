import React from 'react'
import './sidebar.css'

import {Group, Bookmark, HelpOutline, LibraryMusic, MenuBook, Forum, Email, LiveTv, Home, EcoOutlined, Landscape, KeyboardArrowLeft } from "@material-ui/icons"

import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";
import "../../translations/i18n";


export default function Sidebar() {
    const { t } = useTranslation();

    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <div className="center">
                        <Group className="sidebarIcon" />
                        <span className="logo_name">Diidxaza App</span>
                    </div>
                </div>

                <div className="toggle-button-container">
                    <button className="toggle-button">
                        <KeyboardArrowLeft className="sidebarIconToggle"/>
                    </button>
                </div>


                <ul className="nav-links">
                    <li className="sidebarListItem">
                        <Link className="linkto" to="/Home">
                            <Home className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarMiPerfil")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="linkto" to="Not-Found">
                            <Email className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarCorreo")}</span>
                        </Link>
                    </li>
                    
                    <div className="button-section">
                      
                        <button className="sidebarButton">
                            <EcoOutlined className="sidebarIcon"/>
                            {t("SidebarSignOutButton")}
                            </button>
                    </div>

                    <hr className="sidebarHr"></hr>


                    <li className="sidebarListItem">
                        <Link className="linkto" to="/Learning">
                            <Bookmark className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarLearning")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="linkto" to="/News">
                            <LiveTv className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarNews")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="linkto" to="/Forum">
                            <Forum className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarForum")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="linkto" to="/Dictionary">
                            <MenuBook className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarDictionary")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="linkto" to="/Songs">
                            <LibraryMusic className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarSongs")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="linkto" to="/History">
                            <Landscape className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarHistory")}</span>
                        </Link>
                    </li>
                </ul>

                <div className="help-details">
                    <ul className="nav-help">
                        <li className="sidebarListItem">
                            <Link className="linkto" to="/Help">
                                <HelpOutline className="sidebarIcon" />
                                <span className="sidebarListItemText">{t("SidebarHelp")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
