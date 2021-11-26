import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./userreports.scss";
import UserImageDefault from "../../../assets/images/ide-29.svg";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";

export default function UserReports({ username }) {
    const { t } = useTranslation();
    const [reports, setReports] = useState([]);
    const [errorFetchData, setErrorFetchData] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = () => {
        helpHttp().get(UrlAPI + "reports/usernameReported/" + username, {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                console.log(response);
                switch (response.status) {
                    case 404:
                    case 400:
                        setErrorFetchData(true);
                        return;
                }
                setReports(response);
            }
        }, []);
    }

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
                                        <li><Report report={element} /></li>
                                    )
                                    :
                                    <div className="no-found-records">
                                        <span>{t("NotFoundRecords")}</span>
                                    </div>
                            }

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
