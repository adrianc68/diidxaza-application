import React from 'react'
import './reportuser.scss'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";

export default function ReportUser() {
    const { t } = useTranslation();
    return (
        <form className="reportuser-main-container">
            <div className="reportuser-content-container">
                <div className="reportuser-text-description">
                    <h1>{t("ReportUserTitle")}</h1>
                    <span>{t("ReportUserDescription")}</span>

                    <div>
                        <span>{t("ReportUserInputReason")}</span>
                        <input type="text"></input>
                    </div>
                    <div>
                        <span>{t("ReportUserInputContext")}</span>
                        <textarea className="input" type="text>"></textarea>
                    </div>
                </div>
                <div className="reportuser-button-panel">
                    <Button styleName="primary-button" text={t("ButtonCancel")} ></Button>
                    <Button styleName="primary-button" text={t("ButtonReport")} ></Button>
                </div>
            </div>
        </form>
    )
}
