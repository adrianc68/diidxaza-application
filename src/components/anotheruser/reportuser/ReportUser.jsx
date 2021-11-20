import React from 'react'
import './reportuser.scss'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import { useReportForm } from "../../../hooks/useReportForm";

const initialForm = {
    reason: "",
    context: "",
    idAccount: sessionStorage.getItem("id"),
    accountReported: ""
};

const validationsForm = (form) => {
    let errors = {};
    const reason = form.reason.trim();
    const context = form.context.trim();
    let regexContext = /^[\wÑñÁáÉéÍíÓóÚúÜü!?¡¿.,# ]{5,500}$/;
    let regexReason = /^[\wÑñÁáÉéÍíÓóÚúÜü!?¡¿.,# ]{5,200}$/;
    if (context.length === 0) {
        errors.context = "Error";
    }
    else {
        if (!regexContext.test(context)) {
            errors.context = "Error";
        }
    }

    if (reason.length === 0) {
        errors.reason = "Error";
    }
    else {
        if (!regexReason.test(reason)) {
            errors.reason = "Error";
        }
    }
    return errors;
}

export default function ReportUser({ setStatusModal, account, setModalToken}) {
    const { t } = useTranslation();
    const {
        form,
        errors,
        loading,
        response,
        className,
        handleChange,
        handleBlur,
        icon,
        handleSubmit
    } = useReportForm(initialForm, validationsForm, account._id);

    return (
        <form onSubmit={(e) => { handleSubmit(e, setStatusModal, setModalToken) }} className="reportuser-main-container">
            <div className="reportuser-content-container">
                <div className="reportuser-text-description">
                    <span>{t("ReportUserReported")} <b>{account.name} {account.lastname}</b></span>
                    <div className="reportuser-options-container">
                        <span>{t("ReportUserDescription")}</span>
                        <div className="radiobutton-container">
                            <input className="radiobutton" id="1a" type="radio" value={t("ReportUserReasonOne")} name="reason" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="1a">{t("ReportUserReasonOne")}</label>
                        </div>
                        <div className="radiobutton-container">
                            <input className="radiobutton" type="radio" id="2a" value={t("ReportUserReasonTwo")} name="reason" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="2a">{t("ReportUserReasonTwo")}</label>
                        </div>

                        <div className="radiobutton-container">
                            <input className="radiobutton" type="radio" id="3a" value={t("ReportUserReasonThree")} name="reason" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="3a">{t("ReportUserReasonThree")}</label>
                        </div>
                        <div className="system-message-container">
                            {errors.reason && <p className="errorInput">{t("ErrorReason")}</p>}
                        </div>
                    </div>
                    <span>{t("ReportUserInputContext")}</span>
                    <textarea name="context" className="input" type="text>" onBlur={handleBlur} onChange={handleChange} value={form.context} required></textarea>
                    <div className="system-message-container">
                        {errors.context && <p className="errorInput">{t("ErrorContext")}</p>}
                    </div>
                </div>
                <div className="system-message-container">
                    {loading && <p className={className}>{icon}  {response}</p>}
                </div>
                <div className="reportuser-button-panel">
                    <Button styleName="orange-button" text={t("ButtonCancel")} onClick={() => setStatusModal(false)}></Button>
                    <Button type="submit" styleName="green-button" text={t("ButtonReport")} ></Button>
                </div>
            </div>
        </form>
    )
}
