import React, { useState, useEffect } from "react";
import "./editprofile.scss";
import { useTranslation } from "react-i18next";
import Button from "../../../components/Button/Button";
import Modal from "../../modal/Modal";
import AlertMessage from "../../alert/AlertMessage";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { useUpdateAccountForm } from "../../../hooks/useAccountForm";
import UserImageDefault from "../../../assets/images/ide-29.svg";
import { Link } from "react-router-dom";

const validationsForm = (form) => {
    let errors = {};
    let regexUsername = /^[A-Za-z0-9]{3,20}$/;
    let regexName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü ]{2,150}$/;
    let regexDateBirth = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
    let regexEmail = /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/;
    let regexId = /^[a-z0-9]{24}$/;

    if (!regexUsername.test(form.username)) {
        errors.username = "Error";
    }

    if (form.lastname) {
        if (!regexName.test(form.lastname.trim())) {
            errors.lastname = "Error";
        }
    } else {
        errors.lastname = "Error";
    }

    if (form.name) {
        if (!regexName.test(form.name.trim())) {
            errors.name = "Error";
        }
    } else {
        errors.name = "Error";
    }

    if (!regexDateBirth.test(form.dateBirth)) {
        errors.dateBirth = "Error";
    }
    else {
        const dateBirth = new Date(form.dateBirth).getFullYear();
        const dateNow = new Date().getFullYear();
        const year = dateNow - dateBirth;
        if (year < 10 || year > 100) {
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


export default function EditProfile({ setNameUser }) {
    const { t } = useTranslation();

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [form, setForm] = useState([]);
    const [modalNotToken, setModalNotToken] = useState(false);
    const [modalToken, setModalToken] = useState(false);
    const [initialfile, setInitialFile] = useState(UserImageDefault);
    const [namefile, setNameFile] = useState(UserImageDefault);
    const [URLPhoto, setURLPhoto] = useState(null);

    useEffect(() => {
        helpHttp().get(UrlAPI + "accounts/" + sessionStorage.getItem("id"), {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response._id) {
                const initialAccountForm = {
                    _id: sessionStorage.getItem("id"),
                    lastname: response.lastname,
                    name: response.name,
                    age: response.age,
                    dateBirth: response.dateBirth,
                    email: response.email,
                    username: response.username,
                    idCity: response.idCity[0]._id,
                    idState: response.idCity[0].idState[0]
                };
                setForm(initialAccountForm);
                helpHttp().get(UrlAPI + "states").then((response) => {
                    if (!response.status) {
                        setStates(response);
                    }
                });
                helpHttp().get(UrlAPI + "cities/" + response.idCity[0].idState[0]).then((response) => {
                    if (!response.status) {
                        setCities(response);
                    }
                });
                if (response.URL !== undefined) {
                    setURLPhoto(response.URL);
                    fetch(UrlAPI + "resources", {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": sessionStorage.getItem("token")
                        },
                        body: JSON.stringify({ URL: response.URL })
                    }).then((responseResource) => {
                        if (responseResource.ok) {
                            responseResource.blob().then((responseBlob) => {
                                var objectURL = URL.createObjectURL(responseBlob);
                                setNameFile(objectURL);
                                setInitialFile(objectURL);
                            });
                        } else {
                            setNameFile(UserImageDefault);
                            setInitialFile(UserImageDefault);
                        }
                    });
                } else {
                    setURLPhoto(null);
                }
            } else {
                if (response.status === 419) {
                    setModalToken(true);
                } else {
                    if (response.status === 401) {
                        setModalNotToken(true);
                    }
                }
                setURLPhoto(null);
            }
        });
    }, []);



    const {
        handleChangeState,
        errors,
        loading,
        response,
        className,
        handleChange,
        handleBlur,
        handleSubmit,
        handleChangeImage,
        icon,
        errorImage
    } = useUpdateAccountForm(validationsForm, setForm, form, setCities, setModalNotToken, setModalToken, setNameFile, URLPhoto, initialfile, setNameUser, setInitialFile, namefile);

    return (
        <form onSubmit={handleSubmit} className="editprofile-main-container">
            <div className="editprofile-content">
                <div className="editprofile-description-container">
                    <h1>{t("EditProfileTitle")}</h1>
                    <span>{t("EditProfileDescription")}</span>
                </div>
                <div className="editprofile-personal-information-container">
                    <h2>{t("SignUpPersonalInformation")}</h2>
                    <div className="editprofile-personal-information-inputs">
                        <label>
                            <div className="editprofile-photo-input-container">
                                <div className="editprofile-photo-left-side">
                                    <img className="editprofile-user-photo" src={namefile} alt=""></img>
                                    <label className="input-file-label">
                                        <input className="input-file" type="file" name="file" accept="image/png, image/jpeg, image/jpg" onChange={handleChangeImage} />
                                        {t("SignUpFormInputFile")}
                                    </label>
                                </div>
                                <div className="editprofile-photo-input-description">
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
                            <div className="system-message-container">
                                {errors.name && <p className="errorInput">{t("ErrorName")}</p>}
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormLastnameInput")}</p>
                            <input name="lastname" type="text" onBlur={handleBlur} onChange={handleChange} value={form.lastname} required />
                            <div className="system-message-container">
                                {errors.lastname && <p className="errorInput">{t("ErrorName")}</p>}
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormBirthdateInput")}</p>
                            <p>{t("SignUpFormBirthDateDescription")}</p>
                            <input name="dateBirth" type="date" onBlur={handleBlur} onChange={handleChange} value={form.dateBirth} required />
                            <div className="system-message-container">
                                {errors.dateBirth && <p className="errorInput">{t("ErrorDateBirth")}</p>}
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormStateInput")}</p>
                            <select name="idState" onChange={handleChangeState} onBlur={handleBlur} value={form.idState} required>
                                <option value="">{t("SignUpNotOption")}</option>
                                {states.length > 0 && states.map((element) => (
                                    <option key={element._id} value={element._id}>{element.nameState}</option>
                                ))}
                            </select>
                            <div className="system-message-container">
                                {errors.idState && <p className="errorInput">{t("ErrorRequired")}</p>}
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormCityInput")}</p>
                            <select name="idCity" onBlur={handleBlur} onChange={handleChange} value={form.idCity} required>
                                <option value="">{t("SignUpNotOption")}</option>
                                {cities.length > 0 && cities.map((element) => (
                                    <option key={element._id} value={element._id}>{element.nameCity}</option>
                                ))}
                            </select>
                            <div className="system-message-container">
                                {errors.idCity && <p className="errorInput">{t("ErrorRequired")}</p>}
                            </div>
                        </label>


                    </div>
                    <h2>{t("SignUpAccountInformation")}</h2>
                    <div className="editprofile-account-information-inputs">

                        <label>
                            <p className="p-semibold">{t("SignUpFormUsernameInput")}</p>
                            <p>{t("SignUpFormUsernameDescription")}</p>
                            <input name="username" type="text" onBlur={handleBlur} onChange={handleChange} value={form.username} required />
                            <div className="system-message-container">
                                {errors.username && <p className="errorInput">{t("ErrorUsername")}</p>}
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormEmailInput")}</p>
                            <p>{t("SignUpFormEmailDescription")}</p>
                            <input name="email" type="text" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                            <div className="system-message-container">
                                {errors.email && <p className="errorInput">{t("ErrorEmail")}</p>}
                            </div>
                        </label>
                        <div className="system-message-container">
                            {loading && <p className={className}>{icon}  {response}</p>}
                        </div>
                        <div className="editprofile-button-panel">
                            <div>
                                <Link className="link" to={
                                    {
                                        pathname: "/profile/" + sessionStorage.getItem("username"),
                                        state: {
                                            id: sessionStorage.getItem("id"),
                                        }
                                    }
                                }>
                                    <Button styleName="orange-button" text={t("ButtonCancel")}></Button>
                                </Link>
                            </div>
                            <div>
                                <Button type="submit" styleName="primary-button" text={t("ButtonEditProfile")}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalNotToken && <Modal handleModal={() => { setModalNotToken(false); }} sizeHeight="20" sizeWidth="35">
                <AlertMessage content={t("ErrorToken")} handleModal={() => { setModalNotToken(false); }}></AlertMessage>
            </Modal>}
            {modalToken && <Modal handleModal={() => { window.location.href = "login"; }} sizeHeight="20" sizeWidth="35">
                <AlertMessage content={t("RefreshToken")} handleModal={() => { window.location.href = "login"; }}></AlertMessage>
            </Modal>}
        </form>
    );
}
