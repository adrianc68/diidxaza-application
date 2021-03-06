import { useEffect, useState } from "react";
import "./reportsMenu.scss";
import Button from "../../button_application/Button";
import { useTranslation } from "react-i18next";
import Report from "../../report/Report";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { BiSlider } from "react-icons/bi";
import { getMessageResponseStatus } from "../../../helpers/messageResponse";

export default function ReportsMenu() {
    const { t } = useTranslation();
    const [reports, setReports] = useState([]);
    const [serverError, setServerError] = useState(null);
    const [parameter, setParameter] = useState(null);
    const [filter, setFilter] = useState("/usernameAccount/");
    const [timer, setTimer] = useState(null);
    const [errorInformation, setErrorInformation] = useState("");
    const [filterInfo] = useState(t("FilterInformationNumbersLetters"));

    const fetchData = () => {
        setReports([]);
        setServerError(null);
        helpHttp()
            .get(UrlAPI + "reports" + filter + parameter, {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
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
        let buttons = document.querySelectorAll(".reportsmenu-button-filter-button");
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
        const MIN_CHARS = 3;
        const MAX_CHARS = 150;
        if (input.length > MAX_CHARS || input.length < MIN_CHARS) {
            let information = t("ValidationErrorLength");
            information = information.replace("$min", MIN_CHARS.toString());
            information = information.replace("$max", MAX_CHARS.toString());
            setErrorInformation(information);
        }
    };

    const checkUnknownCharacters = (input) => {
        let regexUnknownChars = /^[a-zA-Z0-9????????????????????????????\-@. ]+$/;
        if (!regexUnknownChars.test(input)) {
            let information = t("ValidationErrorUnknownChars");
            setErrorInformation(information);
        }
    };

    const validateInputForm = (input) => {
        setErrorInformation(null);
        if (input === null) {
            setErrorInformation(t("ValidationInvalidTestRegex"));
            return;
        }
        let inputTrim = input.trim();
        checkUnknownCharacters(inputTrim);
        checkLength(inputTrim);
        setParameter(inputTrim);
    };

    const isThereErrorsInForm = () => {
        let isThereError = true;
        validateInputForm(parameter);
        if ( errorInformation === null ) {
            isThereError = false;
        }
        return isThereError;
    };

    function changeDelay(value) {
        const MILISECONDS = 200;
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                validateInputForm(value);
            }, MILISECONDS)
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputForm(parameter);
        if (!isThereErrorsInForm()) {
            fetchData();
        }
    };

    useEffect(() => {
        setReports([]);
        setServerError(null);
        helpHttp()
            .get(UrlAPI + "reports", {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
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
        <section className="reportsmenu-main-container">
            <div className="reportsmenu-content">
                <section className="reportsmenu-search-criteria">
                    <form className="form-search-container" onSubmit={handleSubmit}>
                        <div className="form-search-criteria-input">
                            <label htmlFor="valueInput">{t("AdminReportInputSearchCriteria")}</label>
                            <input
                                id="valueInput"
                                name="valueInput"
                                type="text"
                                onChange={(e) => {
                                    changeDelay(e.target.value);
                                }}
                                required
                            ></input>
                        </div>
                        <div className="form-search-input-button">
                            <Button styleName="button" type="submit">
                                {t("ButtonSearch")}
                            </Button>
                        </div>
                    </form>
                    {<span className="color-gray">{filterInfo}</span>}
                    {<span className="errorInput">{errorInformation}</span>}
                    <div className="form-search-filters-buttons">
                        <div className="filter-container">
                            <span>{t("Filters")}</span>
                            <BiSlider className="filter-icon" />
                        </div>
                        <div className="reportsmenu-button-filter-button">
                            <Button
                                styleName="text-button gray-text active"
                                onClick={() => {
                                    setFilter("/usernameAccount/");
                                }}
                                text={t("FilterReportByUsername")}
                            ></Button>
                        </div>
                        <div className="reportsmenu-button-filter-button">
                            <Button
                                styleName="text-button gray-text"
                                onClick={() => {
                                    setFilter("/usernameReported/");
                                }}
                                text={t("FilterUsernameReported")}
                            ></Button>
                        </div>
                    </div>
                </section>
                <div className="reportsmenu-reports-list-container">
                    <div className="reportsmenu-discussion-list">
                        <ul>
                            {reports.length > 0 ? (
                                reports.map((element) => (
                                    <li id={element._id}>
                                        <Report report={element} />
                                    </li>
                                ))
                            ) : (
                                <div className="no-found-records">
                                    <span className="semibold">{serverError}</span>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
