import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdInbox, MdSend, MdUpdate } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import Button from "../../components/button_application/Button";
import "./email.scss";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import EmailRouter from "../../routers/EmailRouter";
import { useHistory } from "react-router";

export default function Email() {
    const { t } = useTranslation();
    const history = useHistory();
    const [isActiveClassSentInbox, setActiveClassSentInbox] = useState(false);
    const [isActiveClassInbox, setActiveClassInbox] = useState(false);

    const handleSentInboxActiveClass = () => {
        setActiveClassInbox(false);
        setActiveClassSentInbox(true);
    };

    const handleInboxActiveClass = () => {
        setActiveClassSentInbox(false);
        setActiveClassInbox(true);
    };

    const clearActiveClass = () => {
        setActiveClassSentInbox(false);
        setActiveClassInbox(false);
    };

    return (
        <div className="email-main-container">
            <Router>
                <div className="email-content-container">
                    <h1>{t("EmailTitle")}</h1>
                    <div className="email-search-container">
                        <form className="form-search-container item-disabled">
                            <div className="form-search-input-container">
                                <div className="form-search-input">
                                    <label htmlFor="title">{t("EmailSearchCriteriaInput")}</label>
                                    <input id="title" name="title" type="text" disabled required></input>
                                </div>
                                <div className="form-search-button">
                                    <Button styleName="button" type="submit">
                                        {t("ButtonSearch")}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="email-content">
                        <sidebar className="email-left-side-container">
                            <div className="email-sidebar">
                                <ul>
                                    <li onClick={() => handleInboxActiveClass()}>
                                        <NavLink className={isActiveClassInbox ? "email-sidebar-link active" : "email-sidebar-link"} exact to="/email/inbox/">
                                            <MdInbox className="email-sidebar-icon" />
                                            <span>{t("EmailGetAll")}</span>
                                        </NavLink>
                                    </li>
                                    <li onClick={() => handleSentInboxActiveClass()}>
                                        <NavLink className={isActiveClassSentInbox ? "email-sidebar-link active" : "email-sidebar-link"} exact to="/email/sent/">
                                            <MdSend className="email-sidebar-icon" />
                                            <span>{t("EmailTo")}</span>
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="email-create-button-panel">
                                    <NavLink className="link" exact to="/email/create/" onClick={() => clearActiveClass()}>
                                        <Button styleName="button">{t("EmailSendEmail")}</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </sidebar>
                        <div className="email-right-side-container">
                            <div className="email-rs-navigation">
                                <div className="email-rs-button-container">
                                    <Button styleName="icon-button border fullsize" onClick={() => history.goBack()} ariaLabel={t("ariaLabelBackButton")}>
                                        <GoArrowLeft className="icon color-black"></GoArrowLeft>
                                    </Button>
                                </div>

                                <div className="email-rs-button-container">
                                    <Button styleName="icon-button border fullsize" ariaLabel={t("ariaLabelRefreshButton")}>
                                        <MdUpdate className="icon color-black"></MdUpdate>
                                    </Button>
                                </div>
                            </div>
                            <div className="email-rs-content-items">
                                <EmailRouter></EmailRouter>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}
