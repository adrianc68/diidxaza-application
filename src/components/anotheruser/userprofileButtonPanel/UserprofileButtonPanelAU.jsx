import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


export default function UserprofileButtonPanelAU() {
    const { t } = useTranslation();

    return (
        <div>
            <Link className="link" to="/checkprogress">
                <Button styleName="primary-button" text={t("UserProfileButonPanelReportUser")} ></Button>
            </Link>
        </div>
    )
}
