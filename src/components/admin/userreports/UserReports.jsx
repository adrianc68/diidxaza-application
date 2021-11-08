import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import './userreports.scss'
import UserImageDefault from '../../../assets/images/ide-29.svg'
import Report from '../reportsmenu/report/Report';

export default function UserReports() {
    const { t } = useTranslation();

    return (
        <div className="userreports-main-container">
            <div className="userreports-data-container">
                <div className="userreports-image-background">
                    <img src={UserImageDefault}></img>
                </div>
                <p>{t("UserReportAdminPanelDescription")}</p>
                <div className="userreports-list-container">
                    <ul>
                        <li>
                        </li>
                        <li>
                            <Report></Report>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
