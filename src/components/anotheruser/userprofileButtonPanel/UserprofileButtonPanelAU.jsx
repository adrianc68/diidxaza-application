import React from 'react'
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function UserprofileButtonPanelAU( { accountID }) {
    const { t } = useTranslation();

    return (
        <div className="userprofile-button-panel-content">
            {

            }
            <NavLink className="link" to="/checkprogress">
                <Button styleName="primary-button" text={t("UserProfileButonPanelReportUser")} ></Button>
            </NavLink>
        </div>
    )
}
