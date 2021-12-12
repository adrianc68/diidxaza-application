import "./addDiscussion.scss";
import ImageInformationAlt1 from "../../../assets/images/ide-13.svg";
import ImageInformationAlt2 from "../../../assets/images/ide-23.svg";
import ImageInformationAlt3 from "../../../assets/images/ide-25.svg";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useDiscussionForm } from "../../../hooks/useDiscussionForm";
import { Link } from "react-router-dom";

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
    else {
        if (!regexComment.test(comment)) {
            errors.comment = "Error";
        }
    }

    if (title.length === 0) {
        errors.title = "Error";
    }
    else {
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
        icon
    } = useDiscussionForm(initialForm, validationsForm);

    return (
        <form onSubmit={handleSubmit} className="adddiscussion-main-container">
            <h1>{t("AddDicussionTitle")}</h1>
            <div className="adddiscussion-content-container">
                <div className="adddiscussion-main-content">
                    <div className="adddiscussion-img-content">
                    </div>
                    <div className="adddiscussion-information-input-content">
                        <div className="adddiscussion-input-theme">
                            <span className="semibold">{t("AddDiscussionTheme")}</span>
                            <ul>
                                <li className={classInfo} onClick={(e) => { handleClickTheme(e, "info"); }}>
                                    <div className="adddiscussion-theme">
                                        <img src={ImageInformationAlt1} alt={"AlternativeMessageImageDecorative"}></img>
                                        <h3>{t("AddDiscussionInfo")}</h3>
                                        <span>{t("AddDiscussionInfoDescription")}</span>
                                    </div>
                                </li>
                                <li className={classDoubt} onClick={(e) => { handleClickTheme(e, "duda"); }}>
                                    <div className="adddiscussion-theme">
                                        <img src={ImageInformationAlt2} alt={"AlternativeMessageImageDecorative"}></img>
                                        <h3>{t("AddDiscussionDoubt")}</h3>
                                        <span>{t("AddDiscussionDoubtDescription")}</span>
                                    </div>
                                </li>
                                <li className={classRule} onClick={(e) => { handleClickTheme(e, "regla"); }}>
                                    <div className="adddiscussion-theme">
                                        <img src={ImageInformationAlt3} alt={"AlternativeMessageImageDecorative"}></img>
                                        <h3>{t("AddDiscussionRule")}</h3>
                                        <span>{t("AddDiscussionRuleDescription")}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <br />
                        <label className="adddiscussion-input-title">
                            <span className="semibold">{t("AddDiscussionNewTitle")}</span>
                            <input name="title" type="text" onBlur={handleBlur} onChange={handleChange} value={form.title} required></input>
                            <div className="system-message-container">
                                {errors.title && <p className="errorInput">{t("ErrorTitle")}</p>}
                            </div>
                        </label>
                        <label className="adddiscussion-input-description">
                            <span className="semibold">{t("AddDiscussionComment")}</span>
                            <textarea className="input" name="comment" type="text>" onBlur={handleBlur} onChange={handleChange} value={form.comment} required></textarea>
                            <div className="system-message-container">
                                {errors.comment && <p className="errorInput">{t("ErrorComment")}</p>}
                            </div>
                        </label>
                        <div className="system-message-container">
                            {loading && <p className={className}>{icon}  {response}</p>}
                        </div>
                        <div className="adddiscussion-button-panel">
                            <div>
                                <Link className="link" to="/forum">
                                    <Button styleName="orange-button" text={t("ButtonCancel")}></Button>
                                </Link>
                            </div>
                            <div>
                                <Button type="submit" styleName="primary-button" text={t("ButtonCreateDiscussion")}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
