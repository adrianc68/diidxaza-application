import React, { useState, useContext } from "react";
import "./report.scss";
import { useTranslation } from "react-i18next";
import Button from "../button_application/Button";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import { useHistory } from "react-router";
import { useConvertionData } from "../../hooks/useConvertionData";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { ModalContext } from "../../hooks/ModalContext";
import { getMessageResponseStatus } from "../../helpers/messageResponse";

export default function Report({ report }) {
    const { t } = useTranslation();
    const [context, setContext] = useState(null);
    const [isHideContext, setHiddenContext] = useState(true);
    const history = useHistory();
    const [serverError, setServerError] = useState(null);
    const { convertDate } = useConvertionData();
    const { setStatusModal } = useContext(ModalContext);

    const handleModal = () => {
        setStatusModal(false);
        history.push({
            pathname: "/profile/" + report.accountReported[0].username,
            state: {
                id: report.accountReported[0]._id,
            },
        });
    };

    const fetchData = (idReported) => {
        setServerError(null);
        if (context == null) {
            helpHttp()
                .get(UrlAPI + "reports/" + idReported, {
                    headers: {
                        Accept: "application/json",
                        Authorization: sessionStorage.getItem("token"),
                    },
                })
                .then((response) => {
                    if (response != null) {
                        if (response.context !== null && response.context !== undefined) {
                            setContext(response.context);
                            setHiddenContext(!isHideContext);
                            return;
                        }
                        setServerError(getMessageResponseStatus(response));
                    }
                }, []);
        }
        setHiddenContext(!isHideContext);
    };

    return (
        <div className="report-container">
            <div className="report-numeration-container">
                <span className="black-text">{t("UserReportDate")}</span>
                <span>{report.dateCreation}</span>
                <span>{convertDate(report.dateCreation)}</span>
                {report.accountReported[0]._id === sessionStorage.getItem("id") ? null : (
                    <div className="report-numeration-container-panel-button">
                        <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")} onClick={handleModal}></Button>
                    </div>
                )}
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
                    <div className="report-reported-by-icon">{isHideContext ? <BsFillCaretRightFill></BsFillCaretRightFill> : <BsFillCaretDownFill></BsFillCaretDownFill>}</div>
                </div>
                {
                    <div className={isHideContext ? "report-descripction-container hidden" : "report-descripction-container"}>
                        {serverError !== null ? (
                            <div>
                                <span className="color-red">{serverError}</span>
                            </div>
                        ) : (
                            <div>
                                <span className="semibold">{t("UserReportContext")}</span>
                                <span>{context !== null ? context : null}</span>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
}
