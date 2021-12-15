import React, { useState, useEffect } from "react";
import "./sendemail.scss";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI, UrlEmailApi } from "../../../helpers/helpHttp";
import Button from "../../button_application/Button";
import { MdSend } from "react-icons/md";

export default function SendEmail() {
    const { t } = useTranslation();
    const [serverInformation, setServerInformation] = useState(null);
    const [timer, setTimer] = useState(null);
    const [errorEmailInformation, setErrorEmailInformation] = useState("");
    const [errorTitleInformation, setErrorTitleInformation] = useState("");
    const [errorContentInformation, setErrorContentInformation] = useState("");
    const [emailParameter, setEmailParameter] = useState(null);
    const [titleParameter, setTitleParameter] = useState(null);
    const [contentParameter, setContentParameter] = useState(null);

    const checkLength = (value, lengthAllowed, setMessageCallBack) => {
        const MIN_CHARS = lengthAllowed.min;
        const MAX_CHARS = lengthAllowed.max;
        if (value.length > MIN_CHARS || value.length < MIN_CHARS) {
            let information = t("ValidationErrorLength");
            information = information.replace("$min", MIN_CHARS.toString());
            information = information.replace("$max", MAX_CHARS.toString());
            setMessageCallBack(information);
        }
    };

    const checkUnknownCharacters = (value, regex, setMessageCallback) => {
        if (!regex.test(value)) {
            let information = t("ValidationInvalidTestRegex");
            setMessageCallback(information);
        }
    };

    const validateEmailInputForm = (input) => {
        const LENGTH_ALLOWED = {
            min: 2,
            max: 150,
        };
        setErrorEmailInformation(null);
        if (input === null) {
            setErrorEmailInformation(t("ValidationErrorLength").replace("$min", LENGTH_ALLOWED.min).replace("$max", LENGTH_ALLOWED.max));
            return;
        }
        let inputTrim = input.trim();
        checkUnknownCharacters(inputTrim, /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/, setErrorEmailInformation);
        checkLength(inputTrim, LENGTH_ALLOWED, setErrorEmailInformation);
        setEmailParameter(inputTrim);
    };

    const validateTitleInputForm = (input) => {
        let LENGTH_ALLOWED = {
            min: 2,
            max: 150,
        };
        setErrorTitleInformation(null);
        if (input === null) {
            setErrorTitleInformation(t("ValidationErrorLength").replace("$min", LENGTH_ALLOWED.min).replace("$max", LENGTH_ALLOWED.max));
            return;
        }
        let inputTrim = input.trim();
        checkUnknownCharacters(inputTrim, /^[a-zA-Z0-9¿?() ]+$/, setErrorTitleInformation);
        checkLength(inputTrim, LENGTH_ALLOWED, setErrorTitleInformation);
        setTitleParameter(inputTrim);
    };

    const validateContentInputForm = (input) => {
        let LENGTH_ALLOWED = {
            min: 3,
            max: 550,
        };
        setErrorContentInformation(null);
        if (input === null) {
            setErrorContentInformation(t("ValidationErrorLength").replace("$min", LENGTH_ALLOWED.min).replace("$max", LENGTH_ALLOWED.max));
            return;
        }
        let inputTrim = input.trim();
        checkUnknownCharacters(inputTrim, /(.*)/, setErrorContentInformation);
        checkLength(inputTrim, LENGTH_ALLOWED, setErrorContentInformation);
        setContentParameter(inputTrim);
    };

    const isThereErrorsInForm = () => {
        let isThereError = true;
        validateEmailInputForm(emailParameter);
        validateTitleInputForm(titleParameter);
        validateContentInputForm(contentParameter);
        if (errorContentInformation === null || errorEmailInformation === null || errorTitleInformation === null) {
            isThereError = false;
        }
        return isThereError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isThereErrorsInForm()) {
            let form = new Object();
            form.to = emailParameter.toString();
            form.from = sessionStorage.getItem("email").toString();
            form.message = contentParameter.toString();
            form.subject = titleParameter.toString();
            fetch(UrlEmailApi + "emails/send/" + encodeURIComponent(emailParameter), {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            }).then((response, err) => {
                if (response != null) {
                    setServerInformation("Enviado");
                }
            });
        }
    };

    function changeDelay(e, refreshCallBack) {
        let miliseconds = 200;
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                refreshCallBack(e.target.value);
            }, miliseconds)
        );
    }

    return (
        <form className="email-send-main-container" onSubmit={handleSubmit} autocomplete="off">
            <div className="email-rs-container">
                <div className="email-rs-button-container">
                    <Button styleName="icon-button border fullsize" type="submit" ariaLabel={t("ariaLabelSendEmail")}>
                        <MdSend className="icon color-black"></MdSend>
                    </Button>
                    {serverInformation && <span>Enviado</span>}
                </div>
            </div>
            <div className="email-sm-body-to-container">
                <label htmlFor="to">{t("EmailSendMessageTo")}</label>
                <input
                    id="to"
                    name="to"
                    type="text"
                    onChange={(e) => {
                        changeDelay(e, validateEmailInputForm);
                    }}
                ></input>
                {errorEmailInformation && (
                    <div className="sendEmail-error-information">
                        <span className="color-red">{errorEmailInformation}</span>
                        <span className="color-gray">{t("FilterInformationEmail")}</span>
                    </div>
                )}
            </div>
            <div className="email-sm-body-title-container">
                <label htmlFor="subject">{t("EmailSendMessageTitle")} </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={(e) => {
                        changeDelay(e, validateTitleInputForm);
                    }}
                ></input>
                {errorTitleInformation && (
                    <div className="sendEmail-error-information">
                        <span className="color-red">{errorTitleInformation}</span>
                        <span className="color-gray">{t("FilterInformationNumbersLetters")}</span>
                    </div>
                )}
            </div>
            <div className="email-sm-body-message-container">
                <label htmlFor="message">{t("EmailSendMessageContent")} </label>
                <textarea
                    id="message"
                    name="message"
                    className="textarea-email input"
                    type="text>"
                    onChange={(e) => {
                        changeDelay(e, validateContentInputForm);
                    }}
                ></textarea>
                {errorContentInformation && (
                    <div className="sendEmail-error-information">
                        <span className="color-red">{errorContentInformation}</span>
                        <span className="color-gray">{t("FilterInformationNumbersLetters")}</span>
                    </div>
                )}
            </div>
        </form>
    );
}
