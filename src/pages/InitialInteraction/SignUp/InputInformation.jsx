import React, { useState, useEffect } from "react";
import "./inputInformation.scss";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button_application/Button";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { useAccountForm } from "../../../hooks/useAccountForm";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { NUMBER } from "../../../helpers/Number";

const initialForm = {
    lastname: "",
    name: "",
    age: 0,
    dateBirth: "",
    email: "",
    username: "",
    password: "",
    role: "user",
    idCity: "",
    idState: "",
};

const validationsForm = (form) => {
    let errors = {};
    let regexUsername = /^[A-Za-z0-9]{3,20}$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%?#])[A-Za-z\d@!%?#]{8,16}$/;
    let regexName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü ]{2,150}$/;
    let regexDateBirth = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
    let regexEmail = /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/;
    let regexId = /^[a-z0-9]{24}$/;
    if (!regexUsername.test(form.username)) {
        errors.username = "Error";
    }
    if (!regexPassword.test(form.password)) {
        errors.password = "Error";
    }
    if (!regexName.test(form.lastname.trim())) {
        errors.lastname = "Error";
    }
    if (!regexName.test(form.name.trim())) {
        errors.name = "Error";
    }
    if (!regexDateBirth.test(form.dateBirth)) {
        errors.dateBirth = "Error";
    } else {
        const dateBirth = new Date(form.dateBirth).getFullYear();
        const dateNow = new Date().getFullYear();
        const year = dateNow - dateBirth;
        if (year < NUMBER.TEN || year > NUMBER.ONE_HUNDRED) {
            errors.dateBirth = "Error";
        }
    }
    if (!regexEmail.test(form.email)) {
        errors.email = "Error";
    }
    if (!regexId.test(form.idCity)) {
        errors.idCity = "Error";
    }
    if (!regexId.test(form.idState)) {
        errors.idState = "Error";
    }
    return errors;
};

export default function InputInformation() {
    const { t } = useTranslation();
    const [states, setStates] = useState([]);
    const history = useHistory();
    useEffect(() => {
        helpHttp()
            .get(UrlAPI + "states")
            .then((response) => {
                if (response.length > NUMBER.ZERO) {
                    setStates(response);
                }
            });
    }, []);
    const { handleChangeState, cities, form, errors, loading, response, className, handleChange, handleBlur, handleSubmit, namefile, handleChangeImage, icon, errorImage } = useAccountForm(initialForm, validationsForm);
    return (
        <form onSubmit={handleSubmit} className="signup-input-personal-information-form">
            <div className="signup-input-description-container">
                <h1>{t("SignUpIntroductionTitle")}</h1>
                <span>{t("SignUpIntroductionDescription")}</span>
            </div>
            <div className="signup-input-container">
                <div className="signup-personal-information-container">
                    <h2>{t("SignUpPersonalInformation")}</h2>
                    <div className="signup-personal-information-inputs">
                        <label>
                            <div className="signup-photo-input-container">
                                <div className="signup-photo-left-side">
                                    <img className="signup-user-photo" src={namefile} alt=""></img>
                                    <label className="input-file-label">
                                        <input className="input-file" type="file" name="file" accept="image/png, image/jpeg, image/jpg" onChange={handleChangeImage} />
                                        {t("SignUpFormInputFile")}
                                    </label>
                                </div>
                                <div className="signup-photo-input-description">
                                    <p className="p-semibold">{t("SignUpFormPhotoInput")}</p>
                                    <p>{t("SignUpFormPhotoDescription")}</p>
                                </div>
                            </div>
                            <div className="system-message-container">
                                <br />
                                {errorImage && <p className="errorInput">{t("ErrorImage")}</p>}
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormNameLabelInput")}</p>
                            <input name="name" type="text" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                            <div className="system-message-container">{errors.name && <p className="errorInput">{t("ErrorName")}</p>}</div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormLastnameInput")}</p>
                            <input name="lastname" type="text" onBlur={handleBlur} onChange={handleChange} value={form.lastname} required />
                            <div className="system-message-container">{errors.lastname && <p className="errorInput">{t("ErrorName")}</p>}</div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormBirthdateInput")}</p>
                            <p>{t("SignUpFormBirthDateDescription")}</p>
                            <input name="dateBirth" type="date" onBlur={handleBlur} onChange={handleChange} value={form.dateBirth} required />
                            <div className="system-message-container">{errors.dateBirth && <p className="errorInput">{t("ErrorDateBirth")}</p>}</div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormStateInput")}</p>
                            <select name="idState" onChange={handleChangeState} onBlur={handleBlur} value={form.idState} required>
                                <option value="">{t("SignUpNotOption")}</option>
                                {states.length > NUMBER.ZERO &&
                                    states.map((element) => (
                                        <option key={element._id} value={element._id}>
                                            {element.nameState}
                                        </option>
                                    ))}
                            </select>
                            <div className="system-message-container">{errors.idState && <p className="errorInput">{t("ErrorRequired")}</p>}</div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormCityInput")}</p>
                            <select name="idCity" onBlur={handleBlur} onChange={handleChange} value={form.idCity} required>
                                <option value="">{t("SignUpNotOption")}</option>
                                {cities.length > NUMBER.ZERO &&
                                    cities.map((element) => (
                                        <option key={element._id} value={element._id}>
                                            {element.nameCity}
                                        </option>
                                    ))}
                            </select>
                            <div className="system-message-container">{errors.idCity && <p className="errorInput">{t("ErrorRequired")}</p>}</div>
                        </label>
                    </div>
                    <h2>{t("SignUpAccountInformation")}</h2>
                    <div className="signup-account-information-inputs">
                        <label>
                            <p className="p-semibold">{t("SignUpFormUsernameInput")}</p>
                            <p>{t("SignUpFormUsernameDescription")}</p>
                            <input name="username" type="text" onBlur={handleBlur} onChange={handleChange} value={form.username} required />
                            <div className="system-message-container">{errors.username && <p className="errorInput">{t("ErrorUsername")}</p>}</div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormEmailInput")}</p>
                            <p>{t("SignUpFormEmailDescription")}</p>
                            <input name="email" type="text" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                            <div className="system-message-container">{errors.email && <p className="errorInput">{t("ErrorEmail")}</p>}</div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormPassword")}</p>
                            <p>{t("SignUpFormPasswordDescription")}</p>
                            <input name="password" type="password" onBlur={handleBlur} onChange={handleChange} value={form.password} required />
                            <div className="system-message-container">{errors.password && <p className="errorInput">{t("ErrorPassword")}</p>}</div>
                        </label>
                        <div className="system-message-container">
                            {loading && (
                                <p className={className}>
                                    {icon} {response}
                                </p>
                            )}
                        </div>
                        <Button type="submit" styleName="green-button" text={t("SignUpFormSignUpButton")}></Button>
                        <Link className="link" to="/">
                            <Button styleName="orange-button" text={t("SignUpFormCancelButton")} onClick={() => history.push("/")}></Button>
                        </Link>
                    </div>
                </div>
                <div className="signup-image-container"></div>
            </div>
        </form>
    );
}
