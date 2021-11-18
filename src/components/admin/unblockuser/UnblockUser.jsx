import React from 'react'
import './unblockuser.scss'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";

export default function UnblockUser() {
    const { t } = useTranslation();

    return (
        <div className="unblockuser-main-container">
            <div className="unblockuser-content-container">
                <div className="unblockuser-text">
                    <h1>{t("UnblockUserDescriptionTitle")}</h1>
                    <p>{t("UnblockUserDescription")}</p>
                </div>
                <div className="unblockuser-button-panel">
                    <Button styleName="primary-button" text={t("ButtonCancel")} ></Button>
                    <Button styleName="primary-button" text={t("ButtonDeleteAccount")} ></Button>
                </div>
            </div>
        </div>
    )
}
