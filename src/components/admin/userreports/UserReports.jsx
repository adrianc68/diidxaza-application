import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./userreports.scss";
import UserImageDefault from "../../../assets/images/ide-29.svg";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";

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
                console.log("HELLO");
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
                        setReports(response);
                }
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
