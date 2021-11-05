import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


export default function UserprofileButtonPanelADM() {
    const { t } = useTranslation();

    return (
        <div>
            <Link className="link" to="/blockuser">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} ></Button>
            </Link>
            <Link className="link" to="/unblockuser">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} ></Button>
            </Link>
            <Link className="link" to="/userReports">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} ></Button>
            </Link>
        </div>
    )
}
