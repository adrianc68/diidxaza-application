import React, { useState } from "react";
import "./report.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import { useHistory } from "react-router";
import { useConvertionData } from "../../hooks/useConvertionData";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

export default function Report({ report }) {
    const { t } = useTranslation();
    const [context, setContext] = useState(null);
    const [isHideContext, setHiddenContext] = useState(true);
    const history = useHistory();
    const [serverError, setServerError] = useState(null);
    const { convertDate } = useConvertionData();

    const fetchData = (idReported) => {
        if (context == null) {
            helpHttp().get(UrlAPI + "reports/" + idReported, {
                headers: {
                    Accept: "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            }).then((response) => {
                if (response != null) {
                    console.log(response.status);
                    switch (response.status) {
                        case 404:
                            setServerError(t("ServerError404"));
                            break;
                        case 400:
                            setServerError(t("ServerError400"));
                            break;
                        case 419:
                            setServerError(t("ServerError419"));
                            break;
                        case 401:
                            setServerError(t("ServerError401"));
                            break;
                        case 500:
                            setServerError(t("ServerError500"));
                            break;
                        default:
                            setContext(response.context);
                            setHiddenContext(!isHideContext);
                            return;
                    }
                }
            }, []);
        } else {
            setHiddenContext(!isHideContext);
        }
    };

    return (
        <div className="report-container">
            <div className="report-numeration-container">
                <span className="black-text">{t("UserReportDate")}</span>
                <span>{report.dateCreation}</span>
                <span>{convertDate(report.dateCreation)}</span>
                {
                    report.accountReported[0]._id === sessionStorage.getItem("id") ? null :
                        <div className="report-numeration-container-panel-button">
                            <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")} onClick={() => history.push({
                                pathname: "/profile/" + report.accountReported[0].username,
                                state: {
                                    id: report.accountReported[0]._id
                                }
                            })}></Button>
                            <Button styleName="text-button blue-text" text={t("ButtonBlockUser")}></Button>
                        </div>
                }
            </div>
            <div className="report-data-container">
                <div className="report-reported-by-container" onClick={() => fetchData(report._id)}>
                    <div className="report-reported-by-user-datas">
                        <div>
                            <span className="semibold">{t("UserReportUserReported")}</span>
                            <span>{report.accountReported[0].username}</span>
                        </div>
                        <div>
                            <span className="semibold">{t("UserReportReportedBy")}</span>
                            <span>{report.idAccount[0].username}</span>
                        </div>
                    </div>
                    <div className="report-reported-by-reason">
                        <span className="semibold">{t("UserReportReason")}</span>
                        <span>{report.reason}</span>
                    </div>
                    <div className="report-reported-by-icon">
                        {
                            isHideContext ?
                                <BsFillCaretRightFill></BsFillCaretRightFill>
                                :
                                <BsFillCaretDownFill></BsFillCaretDownFill>

                        }
                    </div>
                </div>
                {
                    context !== null ?
                        <div className={isHideContext ? "report-descripction-container hidden" : "report-descripction-container"}>
                            {
                                serverError !== null ?
                                    <div>
                                        <span className="color-red">{serverError}</span>
                                    </div>
                                    :
                                    <div>
                                        <span className="semibold">{t("UserReportContext")}</span>
                                        <span>{context !== null ? context : null}</span>
                                    </div>
                            }
                        </div>
                        :
                        null
                }
            </div>
        </div>
    );
}
