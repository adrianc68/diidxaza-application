import React from 'react'
import './reportsmenu.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";
import Report from '../../report/Report';

export default function ReportsMenu() {
    const { t } = useTranslation();
    return (
        <div className="reportsmenu-main-container">
            <div className="reportsmenu-content">
                <div className="reportsmenu-search-criteria">
                    <h1> {t("AdminReportMenu")} </h1>
                    <div className="form-search-input">
                        <div className="form-search-container-input">
                            <span>{t("AdminReportInputSearchCriteria")}</span>
                            <input type="text"></input>
                        </div>
                        <div>
                            <Button styleName="primary-button">{t("ButtonSearch")}</Button>
                        </div>
                    </div>
                </div>
                <div className="reportsmenu-reports-list-container">
                    <div className="reportsmenu-discussion-list">
                        <ul>
                            <li>
                                <Report></Report>
                            </li>
                            <li>
                                <Report></Report>
                            </li>
                            <li>
                                <Report></Report>
                            </li>
                            <li>
                                <Report></Report>
                            </li>
                            <li>
                                <Report></Report>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="reportsmenu-button-panel">
                    <div>
                        <Button styleName="primary-button">{t("ButtonClose")}</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
