import React from 'react'
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function UserprofileButtonPanelOWU() {
    const { t } = useTranslation();

    return (
        <div>
            <NavLink className="link" to="/deleteaccount">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelDeleteAccount")} ></Button>
            </NavLink>
            <NavLink className="link" to="/checkprogress">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} ></Button>
            </NavLink>
            <NavLink className="link" to="/editprofile">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
            </NavLink>
        </div>
    )
}