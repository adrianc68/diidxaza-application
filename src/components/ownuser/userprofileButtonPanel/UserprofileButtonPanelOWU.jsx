import React, { useState } from 'react'
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import { useRouteMatch } from 'react-router-dom'

export default function UserprofileButtonPanelOWU({ handleModal }) {
    const { t } = useTranslation();
    const { url } = useRouteMatch();
 
    return (
        <div className="userprofile-button-panel-content">
            <Button styleName="primary-button" text={t("UserProfileButtonPanelDeleteAccount")} onClick={() => handleModal(<DeleteAccount />, 70, 70, t("UserReportAdminPanelTitle"))} ></Button>
            <NavLink className="link" to={`${url}/progress`}>
                <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} ></Button>
            </NavLink>
            <NavLink className="link" to={`${url}/edit`}>
                <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
            </NavLink>
        </div>
    )
}