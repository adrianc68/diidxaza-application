import { useEffect, useState } from "react";
import "./reportsMenu.scss";
import Button from "../../button/Button";
import { useTranslation } from "react-i18next";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/HelpHttp";
import { BiSlider } from "react-icons/bi";
import { getMessageResponseStatus } from "../../../helpers/MessageResponse";

export default function ReportsMenu() {
    const { t } = useTranslation();
    const [reports, setReports] = useState([]);
    const [serverError, setServerError] = useState(null);
    const [parameter, setParameter] = useState("");
    const [filter, setFilter] = useState("/usernameAccount/");
    const [timer, setTimer] = useState(null);
    const [errorInformation, setErrorInformation] = useState(null);
    const [filterInfo, setFilterInfo] = useState(t("FilterInformationNumbersLetters"));

    const fetchData = () => {
        setReports([]);
        setServerError(null);
        helpHttp().get(UrlAPI + "reports" + filter + parameter, {
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
        var miliseconds = 200;
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(setTimeout(() => {
            validateInputForm(value);
        }, miliseconds)
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
        setServerError(null);
        helpHttp().get(UrlAPI + "reports", {
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
                        <span className="color-gray">{filterInfo}</span>
                    }
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
