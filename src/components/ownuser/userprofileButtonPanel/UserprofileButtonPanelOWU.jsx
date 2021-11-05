import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function UserprofileButtonPanelOWU() {
    const { t } = useTranslation();

    return (
        <div>
            <Link className="link" to="/deleteaccount">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelDeleteAccount")} ></Button>
            </Link>
            <Link className="link" to="/checkprogress">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} ></Button>
            </Link>
            <Link className="link" to="/editprofile">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
            </Link>
        </div>
    )
}