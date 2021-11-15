import React from 'react'
import './reportuser.scss'
import Button from '../../Button/Button'
import {useTranslation} from "react-i18next";
import {useReportForm} from "../../../hooks/useReportForm";

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
    else{
        if (!regexContext.test(context)) {
            errors.context = "Error";
        }
    }
    
    if (reason.length === 0) {
        errors.reason = "Error";
    }
    else{
        if (!regexReason.test(reason)) {
            errors.reason = "Error";
        }
    }
    return errors;
}

export default function ReportUser({setStatusModal, account}) {
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
    } = useReportForm(initialForm, validationsForm,account._id);

    return (
        <form onSubmit={(e)=>{handleSubmit(e,setStatusModal)}} className="reportuser-main-container">
            <div className="reportuser-content-container">
                <div className="reportuser-text-description">
                    <span>{t("ReportUserReported")} <b>{account.name} {account.lastname}</b></span>
                    <div className ="reason-div">
                        <span>{t("ReportUserDescription")}</span>
                        <label>
                            <input className="input-radio" type="radio" value={t("ReportUserReasonOne")} name="reason" onChange={handleChange} onBlur={handleBlur}/>
                            {t("ReportUserReasonOne")}
                        </label>
                        <label>
                            <input type="radio" value={t("ReportUserReasonTwo")} name="reason" onChange={handleChange} onBlur={handleBlur}/>
                            {t("ReportUserReasonTwo")}
                        </label>
                        <label>
                            <input type="radio" value={t("ReportUserReasonThree")} name="reason" onChange={handleChange} onBlur={handleBlur}/>
                            {t("ReportUserReasonThree")}
                        </label>
                        {errors.reason && <p className="errorInput">{t("ErrorReason")}</p>}
                    </div>
                    <div>
                        <span>{t("ReportUserInputContext")}</span>
                        <textarea name="context" className="input" type="text>" onBlur={handleBlur} onChange={handleChange} value={form.context} required></textarea>
                        {errors.context && <p className="errorInput">{t("ErrorContext")}</p>}
                    </div>
                </div>
                {loading && <p className={className}>{icon}  {response}</p>}
                <div className="reportuser-button-panel">
                    <Button styleName="orange-button" text={t("ButtonCancel")} onClick= {()=>setStatusModal(false)}></Button>
                    <Button type="submit" styleName="green-button" text={t("ButtonReport")} ></Button>
                </div>
            </div>
        </form>
    )
}
