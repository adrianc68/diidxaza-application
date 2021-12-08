import React, { useEffect, useState } from "react";
import "./accountsmenu.scss";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import UserListItem from "./userlistitem/UserListItem";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { BiSlider } from "react-icons/bi";
import { getMessageResponseStatus } from "../../../helpers/MessageResponse";

export default function AccountsMenu() {
    const { t } = useTranslation();
    const [accountsItems, setAccountsItems] = useState([]);
    const [serverError, setServerError] = useState(null);
    const [parameter, setParameter] = useState("");
    const [filter, setFilter] = useState("/name/");
    const [timer, setTimer] = useState(null);
    const [errorInformation, setErrorInformation] = useState(null);
    const [regex, setRegex] = useState(/^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚúÜü ]+$/);
    const [filterInfo, setFilterInfo] = useState(t("FilterInformationNumbersLetters"));

    const checkLength = (input) => {
        let minChars = 1;
        let maxChars = 150;
        if (input.length > maxChars || input.length < minChars) {
            let information = t("ValidationErrorLength");
            information = information.replace("$min", minChars.toString());
            information = information.replace("$max", maxChars.toString());
            setErrorInformation(information);
        }
    };

    const checkUnknownCharacters = (input) => {
        let regexUnknownChars = regex;
        if (!regexUnknownChars.test(input)) {
            let information = t("ValidationInvalidTestRegex");
            setErrorInformation(information);
        }
    };

    const validateInputForm = (input) => {
        var inputTrim = input.trim();
        setErrorInformation(null);
        checkUnknownCharacters(inputTrim);
        checkLength(inputTrim);
        setParameter(inputTrim);
    };

    const fetchData = () => {
        setAccountsItems([]);
        setServerError(null);
        helpHttp().get(UrlAPI + "accounts" + filter + parameter, {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                if (response.length > 0) {
                    setAccountsItems(response);
                    return;
                }
                setServerError(getMessageResponseStatus(response));
            }
        }, []);
    };

    const setActiveClassFilterButtons = () => {
        var buttons = document.querySelectorAll(".accountsmenu-button-filter-button");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputForm(parameter);
        if (errorInformation === null) {
            fetchData(filter, parameter);
        }
    };

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

    useEffect(() => {
        setAccountsItems([]);
        setServerError(null);
        helpHttp().get(UrlAPI + "accounts", {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                if (response.length > 0) {
                    setAccountsItems(response);
                    return;
                }
                setServerError(getMessageResponseStatus(response));
            }
        }, []);
        setActiveClassFilterButtons();

    }, [t]);

    const handleButtonFilterName = () => {
        setFilter("/name/");
        setFilterInfo(t("FilterInformationNumbersLetters"));
        setRegex(/^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚúÜü ]+$/);
    };

    const handleButtonFilterLastname = () => {
        setFilter("/lastname/");
        setFilterInfo(t("FilterInformationNumbersLetters"));
        setRegex(/^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚúÜü ]+$/);
    };

    const handleButtonFilterAge = () => {
        setFilter("/age/");
        setFilterInfo(t("FilterInformationNumbers"));
        setRegex(/^[0-9]{1,2}$/);
    };

    const handleButtonFilterEmail = () => {
        setFilter("/email/");
        setFilterInfo(t("FilterInformationEmail"));
        setRegex(/\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/);
    };

    const handleButtonFilterUsername = () => {
        setFilter("/username/");
        setFilterInfo(t("FilterInformationNumbersLetters"));
        setRegex(/^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚúÜü ]+$/);
    };

    return (
        <div className="accountsmenu-main-container">
            <div className="accountsmenu-content">
                <div className="accountsmenu-search-criteria">
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
                        <div className="accountsmenu-button-filter-button" >
                            <Button styleName="text-button gray-text active" onClick={() => { handleButtonFilterName(); }} text={t("FilterName")}></Button>
                        </div>
                        <div className="accountsmenu-button-filter-button">
                            <Button styleName="text-button gray-text" onClick={() => { handleButtonFilterLastname(); }} text={t("FilterLastName")}></Button>
                        </div>
                        <div className="accountsmenu-button-filter-button" >
                            <Button styleName="text-button gray-text" onClick={() => { handleButtonFilterAge(); }} text={t("FilterAge")}></Button>
                        </div>
                        <div className="accountsmenu-button-filter-button" >
                            <Button styleName="text-button gray-text" onClick={() => { handleButtonFilterEmail(); }} text={t("FilterEmail")}></Button>
                        </div>
                        <div className="accountsmenu-button-filter-button" >
                            <Button styleName="text-button gray-text" onClick={() => { handleButtonFilterUsername(); }} text={t("FilterUsername")}></Button>
                        </div>
                    </div>
                </div>
                <div className="accountsmenu-reports-list-container">
                    <div className="accountsmenu-discussion-list">
                        <ul>
                            {
                                accountsItems.length > 0 ?
                                    accountsItems.map((element) =>
                                        <li id={element._id}><UserListItem account={element} /></li>
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
