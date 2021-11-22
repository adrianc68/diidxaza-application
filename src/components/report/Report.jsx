import React, { useEffect, useState } from 'react'
import './report.scss'
import { useTranslation } from "react-i18next";
import Button from '../Button/Button';
import { helpHttp, UrlAPI } from '../../helpers/helpHttp';
import { useHistory } from 'react-router';

export default function Report({ report }) {
    const { t } = useTranslation();
    const [context, setContext] = useState(null);
    const history = useHistory();

    const convertDate = (date) => {
        if (date) {
            var dateString = date.split(['-']);
            var year = dateString[0];
            var month = dateString[1];
            var day = dateString[2];
            var formatDate = new Date(year, month - 1, day);
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            return (formatDate.toLocaleDateString("es-ES", options));
        }
    }

    const fetchData = (idReported) => {
        helpHttp().get(UrlAPI + "reports/" + idReported, {
            headers: {
                Accept: "application/json",
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                console.log(response);
                setContext(response.context);
            }
        }, []);
    }

    return (
        <div className="report-container">
            <div className="report-numeration-container">
                <span className="black-text">{t("UserReportDate")}</span>
                <span>{report.dateCreation}</span>
                <span>{convertDate(report.dateCreation)}</span>
                {
                    report.idAccount[0]._id === null ? null :
                        <div className="report-numeration-container-panel-button">
                            <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")} onClick={ () => history.push({
                                pathname: '/profile/' + report.accountReported[0].username,
                                state: {
                                    id: report.accountReported[0]._id
                                }
                            }) }></Button>
                            <Button styleName="text-button blue-text" text={t("ButtonBlockUser")}></Button>
                        </div>
                }
            </div>
            <div className="report-data-container">
                <div className="report-reported-by-container">
                    <div>
                        <div>
                            <span className="semibold">{t("UserReportUserReported")}</span>
                            <span>{report.accountReported[0].username}</span>
                        </div>
                        <div>
                            <span className="semibold">{t("UserReportReportedBy")}</span>
                            <span>{report.idAccount[0].username}</span>
                        </div>
                    </div>

                    <div>
                        <span className="semibold">{t("UserReportReason")}</span>
                        <span>{report.reason}</span>
                    </div>
                </div>
                <div className="report-descripction-container" onClick={() => fetchData(report._id)}>

                    <div>
                        <span className="semibold">{t("UserReportContext")}</span>
                        <span>{context !== null ? context : null}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
