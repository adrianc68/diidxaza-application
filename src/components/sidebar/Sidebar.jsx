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





    return (
        <>
            <div className="sidebar">
                <div className="sidebar-toggle-button-container">
                    <button className="sidebar-toggle-button">
                        <Menu className="sidebarIconToggle" />
                    </button>
                </div>

                <ul className="sidebar-nav-links">
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/home">
                            <Home className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarHome")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="not-found">
                            <Email className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarCorreo")}</span>
                        </Link>
                    </li>

                    <div className="sidebar-button-section">
                        <div className="sidebarButton">
                            <Button styleName="primary-button" text={t("SidebarSignOutButton")}>
                                <MdLogout className="sidebarIcon"></MdLogout>
                            </Button>
                        </div>

                    </div>

                    <hr className="sidebarHr"></hr>


                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/learning">
                            <Bookmark className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarLearning")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/news">
                            <LiveTv className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarNews")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/forum">
                            <Forum className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarForum")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/dictionary">
                            <MenuBook className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarDictionary")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/songs">
                            <LibraryMusic className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarSongs")}</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebar-linkto" to="/history">
                            <Landscape className="sidebarIcon" />
                            <span className="sidebarListItemText">{t("SidebarHistory")}</span>
                        </Link>
                    </li>
                </ul>

                <div className="sidebar-help-details">
                    <ul className="sidebar-nav-help">
                        <li className="sidebarListItem">
                            <Link className="sidebar-linkto" to="/help">
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
