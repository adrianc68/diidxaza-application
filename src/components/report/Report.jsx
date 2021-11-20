import React, { useEffect, useState } from 'react'
import './report.scss'
import { useTranslation } from "react-i18next";
import Button from '../Button/Button';

export default function Report({user}) {
    const { t } = useTranslation();
    const [userID, setUser] = useState(null)

    useEffect( () => {
        const userA = {test: "hello"};
        // if(user) {
            // setUser(userA);
        // }
    });

    return (
        <div className="report-container">
            <div className="report-numeration-container">
                <span className="black-text">{t("UserReportNumberReport")}</span>
                <span>1</span>
                {
                    userID === null ? null :
                        <div className="report-numeration-container-panel-button">
                            <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")}></Button>
                            <Button styleName="text-button blue-text" text={t("ButtonBlockUser")}></Button>
                        </div>
                }
            </div>
            <div className="report-data-container">
                <div className="report-reported-by-container">
                    <div>
                        <span>{t("UserReportReportedBy")}</span>
                        <span>Pedro Pedraza</span>
                    </div>
                    <div>
                        <span>{t("UserReportUserReported")}</span>
                        <span>testarudo</span>
                    </div>
                </div>
                <div className="report-descripction-container">
                    <div>
                        <span className="semibold">{t("UserReportReason")}</span>
                        <span>SPAM</span>
                    </div>
                    <div>
                        <span className="semibold">{t("UserReportContext")}</span>
                        <span>La razón del reporte es que este usuario ha estado haciendo spam</span>
                    </div>
                </div>
            </div>
        </div>
    )
}