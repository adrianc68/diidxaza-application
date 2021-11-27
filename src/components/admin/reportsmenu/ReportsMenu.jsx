import { useEffect, useState } from "react";
import "./reportsmenu.scss";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";

export default function ReportsMenu() {
    const { t } = useTranslation();
    const [reports, setReports] = useState([]);
    const [reportInput, setReportInput] = useState(null);
    const [errors, setErrors] = useState({});
    const [errorFetchData, setErrorFetchData] = useState(false);

    const fetchData = () => {
        helpHttp().get(UrlAPI + "reports", {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                switch (response.status) {
                    case 404:
                    case 400:
                        setErrorFetchData(true);
                        return;
                }
                setReports(response);
            }
        }, []);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const validateForm = (toValidate) => {
        let errors = {};
        toValidate = toValidate.trim();
        if (toValidate.length === 0) {
            errors.title = "Error";
        }
        return errors;
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setReportInput(value);
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(reportInput));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(reportInput));
        if (Object.keys(errors).length === 0) {
            // setLoadingDiscussion(false);
            // setFoundDiscussion(false);
            helpHttp().get(UrlAPI + "reports/nameAccount/" + reportInput, {
                headers: {
                    Accept: "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            }).then((response) => {
                if (!response.status) {
                    console.log(response);
                    //     setLoading(false);
                    //     setDiscussions(response);
                    // } else {
                    //     setDiscussions([]);
                    //     if (response.status === 404) {
                    //         setLoading(true);
                    //     } else {
                    //         if (response.status === 401) {
                    //             setLoading(false);
                    //             setResponseModalForum(t("ErrorToken"));
                    //             setModalForum(true);
                    //         } else {
                    //             if (response.status === 419) {
                    //                 setLoading(false);
                    //                 setModalForum(false);
                    //                 setModalToken(true);
                    //             } else {
                    //                 setLoading(false);
                    //             }
                    //         }
                    //     }
                }
            });
        }
        else {
            return;
        }
    }

    return (
        <div className="reportsmenu-main-container">
            <div className="reportsmenu-content">
                <div className="reportsmenu-search-criteria">
                    <form className="form-search-input" onSubmit={handleSubmit}>
                        <div className="form-search-container-input">
                            <span>{t("AdminReportInputSearchCriteria")}</span>
                            <input name="reportInput" type="text" onChange={handleChange} onBlur={handleBlur} value={reportInput} required></input>
                        </div>
                        <div className="form-search-input-button">
                            <Button styleName="primary-button" type="submit">{t("ButtonSearch")}</Button>
                        </div>
                    </form>
                </div>
                <div className="reportsmenu-reports-list-container">
                    <div className="reportsmenu-discussion-list">
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
