import { useEffect, useState } from "react";
import "./reportsmenu.scss";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { BiSlider } from "react-icons/bi";

export default function ReportsMenu() {
    const { t } = useTranslation();
    const [reports, setReports] = useState([]);
    const [serverError, setServerError] = useState(null);
    const [parameter, setParameter] = useState("");
    const [filter, setFilter] = useState("/usernameAccount/");
    const [timer, setTimer] = useState(null);
    const [errorInformation, setErrorInformation] = useState(null);

    const fetchData = () => {
        setReports([]);
        helpHttp().get(UrlAPI + "reports" + filter + parameter, {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
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
    };

    const setActiveClassFilterButtons = () => {
        var buttons = document.querySelectorAll(".reportsmenu-button-filter-button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].children[0].addEventListener("click", (e) => {
                e.preventDefault();
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].children[0].classList.remove("active");
                }
                buttons[i].children[0].classList.add("active");
            });
        }
    };

    const checkLength = (input) => {
        let minChars = 2;
        let maxChars = 150;
        if (input.length > maxChars || input.length < minChars) {
            let information = t("ValidationErrorLength");
            information = information.replace("$min", minChars.toString());
            information = information.replace("$max", maxChars.toString());
            setErrorInformation(information);
        }
    }

    const checkUnknownCharacters = (input) => {
        let regexUnknownChars = /^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚúÜü\-@. ]+$/;
        if (!regexUnknownChars.test(input)) {
            let information = t("ValidationErrorUnknownChars");
            setErrorInformation(information);
        }
    }

    function changeDelay(value) {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(setTimeout(() => {
            validateInputForm(value);
        }, 200)
        );
    }

    const validateInputForm = (input) => {
        var inputTrim = input.trim();
        setErrorInformation(null);
        checkUnknownCharacters(inputTrim);
        checkLength(inputTrim);
        setParameter(inputTrim);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errorInformation === null) {
            fetchData(filter, parameter);
        }
    };

    useEffect(() => {
        setReports([]);
        helpHttp().get(UrlAPI + "reports", {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
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
        setActiveClassFilterButtons();
    }, [t]);

    return (
        <div className="reportsmenu-main-container">
            <div className="reportsmenu-content">
                <div className="reportsmenu-search-criteria">
                    <form className="form-search-container" onSubmit={handleSubmit}>
                        <div className="form-search-criteria-input">
                            <span>{t("AdminReportInputSearchCriteria")}</span>
                            <input name="valueInput" type="text" onChange={(e) => { changeDelay(e.target.value); }} required></input>
                        </div>
                        <div className="form-search-input-button">
                            <Button styleName="primary-button" type="submit">{t("ButtonSearch")}</Button>
                        </div>
                    </form>
                    {
                        <span className="errorInput">{errorInformation}</span>
                    }
                    <div className="form-search-filters-buttons">
                        <div className="filter-container">
                            <span>{t("Filters")}</span>
                            <BiSlider className="filter-icon" />
                        </div>
                        <div className="reportsmenu-button-filter-button" >
                            <Button styleName="text-button gray-text active" onClick={() => { setFilter("/usernameAccount/"); }} text={t("FilterReportByUsername")}></Button>
                        </div>
                        <div className="reportsmenu-button-filter-button">
                            <Button styleName="text-button gray-text" onClick={() => { setFilter("/usernameReported/"); }} text={t("FilterUsernameReported")}></Button>
                        </div>
                    </div>

                </div>
                <div className="reportsmenu-reports-list-container">
                    <div className="reportsmenu-discussion-list">
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
