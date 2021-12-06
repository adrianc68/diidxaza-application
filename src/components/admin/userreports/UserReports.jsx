import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./userreports.scss";
import UserImageDefault from "../../../assets/images/ide-29.svg";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { getMessageResponseStatus } from "../../../helpers/MessageResponse";

export default function UserReports({ username }) {
    const { t } = useTranslation();
    const [reports, setReports] = useState([]);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        helpHttp().get(UrlAPI + "reports/usernameReported/adrianc68", {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                if (response.length > 0) {
                    setReports(response);
                    return;
                }
                setServerError(getMessageResponseStatus(response));
            }
        }, []);
    }, [username, t]);

    return (
        <div className="userreports-main-container">
            <div className="userreports-content-container">
                <div className="userreports-data-container">
                    <div className="userreports-image-background">
                        <img src={UserImageDefault} alt="AlternativeMessageImageDecorative"></img>
                    </div>
                    <p>{t("UserReportAdminPanelDescription")}</p>
                    <div className="userreports-list-container">
                        <ul>
                            {
                                reports.length > 0 ?
                                    reports.map((element) =>
                                        <li id={element._id}><Report report={element} /></li>
                                    )
                                    :
                                    <div className="no-found-records">
                                        <span className="semibold">{serverError}</span>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
