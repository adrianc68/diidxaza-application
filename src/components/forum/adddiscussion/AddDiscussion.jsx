import React from 'react'
import './adddiscussion.scss'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import Button from '../../../components/Button/Button'
import { useTranslation } from 'react-i18next'
import { useDiscussionForm } from "../../../hooks/useDiscussionForm";
import Modal from '../../modal/Modal';
import AlertMessage from "../../alert/AlertMessage";

const initialForm = {
    title: "",
    comment: "",
    theme: "", 
    idAccount: sessionStorage.getItem("id")
};

const validationsForm = (form) => {
    let errors = {};
    const comment = form.comment.trim();
    const title = form.title.trim();
    let regexComment = /^[\wÑñÁáÉéÍíÓóÚúÜü!?¡¿.,# ]{5,600}$/;
    let regexTitle = /^[\wÑñÁáÉéÍíÓóÚúÜü!?¡¿.,# ]{4,200}$/;
    if (comment.length === 0) {
        errors.comment = "Error";
    }
    else{
        if (!regexComment.test(comment)) {
            errors.comment = "Error";
        }
    }
    
    if (title.length === 0) {
        errors.title = "Error";
    }
    else{
        if (!regexTitle.test(title)) {
            errors.title = "Error";
        }
    }
    return errors;
};

export default function AddDiscussion() {
    const { t } = useTranslation();

    const {
        form,
        errors,
        loading,
        response,
        className,
        handleChange,
        handleBlur,
        handleSubmit,
        handleClickTheme,
        classInfo,
        classDoubt,
        classRule,
        icon,
        modalNotToken,
        modalToken,
        setModalNotToken
      } = useDiscussionForm(initialForm, validationsForm);

    return (
        <form onSubmit={handleSubmit} className="adddiscussion-main-container">
            <h2>{t("AddDicussionTitle")}</h2>
            <div className="adddiscussion-main-content">
                <div className="adddiscussion-img-content">
                </div>
                <div className="adddiscussion-information-input-content">
                    <div className="adddiscussion-input-theme">
                        <h3>{t("AddDiscussionTheme")}</h3>
                        <ul>
                            <li className={classInfo} onClick={(e) => {handleClickTheme(e, "info")}}>
                                <div className="adddiscussion-theme">
                                    <img src={ImageInformationAlt} alt={"AlternativeMessageImageDecorative"}></img>
                                    <h3>{t("AddDiscussionInfo")}</h3>
                                    <span>{t("AddDiscussionInfoDescription")}</span>
                                </div>
                            </li>
                            <li className={classDoubt} onClick={(e) => {handleClickTheme(e, "duda")}}>
                                <div className="adddiscussion-theme">
                                    <img src={ImageInformationAlt} alt={"AlternativeMessageImageDecorative"}></img>
                                    <h3>{t("AddDiscussionDoubt")}</h3>
                                    <span>{t("AddDiscussionDoubtDescription")}</span>
                                </div>
                            </li>
                            <li className={classRule} onClick={(e) => {handleClickTheme(e, "regla")}}>
                                <div className="adddiscussion-theme">
                                    <img src={ImageInformationAlt} alt={"AlternativeMessageImageDecorative"}></img>
                                    <h3>{t("AddDiscussionRule")}</h3>
                                    <span>{t("AddDiscussionRuleDescription")}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <label className="adddiscussion-input-title">
                        <h3>{t("AddDiscussionNewTitle")}</h3>
                        <input name="title" type="text" onBlur={handleBlur} onChange={handleChange} value={form.title} required></input>
                        <div className="system-message-container">
                            {errors.title && <p className="errorInput">{t("ErrorTitle")}</p>}
                        </div>
                    </label>
                    <label className="adddiscussion-input-description">
                        <h3>{t("AddDiscussionComment")}</h3>
                        <textarea className="input" name="comment" type="text>" onBlur={handleBlur} onChange={handleChange} value={form.comment} required></textarea>
                        <div className="system-message-container">
                            {errors.comment && <p className="errorInput">{t("ErrorComment")}</p>}
                        </div>
                    </label>
                    <div className="system-message-container">
                        {loading && <p className={className}>{icon}  {response}</p>}
                    </div>
                    <div className="adddiscussion-button-panel">
                        <Button type="submit" styleName="primary-button" text={t("ButtonCreateDiscussion")}></Button>
                    </div>
                </div>
            </div>
            {modalNotToken && <Modal handleModal={()=>{setModalNotToken(false)}} sizeHeight="20" sizeWidth="35">
                <AlertMessage content={t("ErrorToken")} handleModal={()=>{setModalNotToken(false)}}></AlertMessage>
            </Modal>}
            {modalToken && <Modal handleModal={()=>{window.location.href = 'login';}} sizeHeight="20" sizeWidth="35">
                <AlertMessage content={t("RefreshToken")} handleModal={()=>{window.location.href = 'login';}}></AlertMessage>
            </Modal>}
        </form>
    )
}
