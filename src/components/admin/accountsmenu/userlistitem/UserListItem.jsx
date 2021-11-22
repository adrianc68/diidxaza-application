import React from 'react'
import './userlistitem.scss'
import Button from '../../../Button/Button'
import { useTranslation } from 'react-i18next'
import { NavLink } from "react-router-dom";

export default function UserListItem({ account }) {
    const { t } = useTranslation();
    return (
        <div className="userlistitem-main-container">
            <div className="userlistitem-content">
                <div className="userlistitem-data-content">
                    <div>
                        <span>{t("UserListItemName")}</span>
                        <span>{account.name + " " + account.lastname}</span>
                    </div>

                    <div>
                        <span>{t("UserListItemUsername")}</span>
                        <span>{account.username}</span>
                    </div>
                    <div>
                        <span>{t("UserID")}</span>
                        <span>{account._id}</span>
                    </div>
                </div>
                <div className="userlistitem-button-panel">

                    <NavLink className="link" to={{
                        pathname: "/profile/" + account.username,
                        state: {
                            id: account._id,
                        }
                    }
                    }>
                        <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")}></Button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}
