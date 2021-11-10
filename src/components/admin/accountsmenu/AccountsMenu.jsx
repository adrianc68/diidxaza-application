import React from 'react'
import './accountsmenu.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";
import UserListItem from './userlistitem/UserListItem';

export default function AccountsMenu() {
    const { t } = useTranslation();
    return (
        <div className="accountsmenu-main-container">
        <div className="accountsmenu-content">
            <div className="accountsmenu-search-criteria">
                <h1> {t("AdminAccountMenu")} </h1>
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
            <div className="accountsmenu-reports-list-container">
                <div className="accountsmenu-discussion-list">
                    <ul>
                        <li>
                            <UserListItem></UserListItem>
                        </li>
                        <li>
                            <UserListItem></UserListItem>
                        </li>
                        <li>
                            <UserListItem></UserListItem>
                        </li>
                        <li>
                            <UserListItem></UserListItem>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="accountsmenu-button-panel">
                <div>
                    <Button styleName="primary-button">{t("ButtonClose")}</Button>
                </div>
            </div>

        </div>
    </div>
    )
}
