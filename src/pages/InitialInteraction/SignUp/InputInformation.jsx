import React from 'react'
import './InputInformation.scss'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'


export default function InputInformation() {
    const { t } = useTranslation();


    return (
        <form className="signup-input-personal-information-form">
            <div className="signup-input-description-container">
                <h1>{t("SignUpIntroductionTitle")}</h1>
                <span>{t("SignUpIntroductionDescription")}</span>
            </div>
            <div className="signup-personal-information-container">
                <h2>{t("SignUpPersonalInformation")}</h2>
                <div className="signup-personal-information-inputs">
                    <label>
                        <div className="signup-photo-input-container">
                            <img className="signup-user-photo"></img>
                            <div className="signup-photo-input">
                                <p>{t("SignUpFormPhotoInput")}</p>
                                <input className="input-file" type="file" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                    </label>
                    <label>
                        <p>{t("SignUpFormNameLabelInput")}</p>
                        <input className="input" type="text" />
                    </label>
                    <label>
                        <p>{t("SignUpFormLastnameInput")}</p>
                        <input className="input" type="text" />
                    </label>
                    <label>
                        <p>{t("SignUpFormBirthdateInput")}</p>
                        <p>{t("SignUpFormBirthDateDescription")}</p>
                        <input className="input" type="text" />
                    </label>

                </div>
                <h2>{t("SignUpAccountInformation")}</h2>
                <div className="signup-account-information-inputs">
                    <label>
                        <p>{t("SignUpFormUsernameInput")}</p>
                        <p>{t("SignUpFormUsernameDescription")}</p>
                        <input className="input" type="text" />
                    </label>
                    <label>
                        <p>{t("SignUpFormEmailInput")}</p>
                        <p>{t("SignUpFormEmailDescription")}</p>
                        <input className="input" type="text" />
                    </label>
                    <label>
                        <p>{t("SignUpFormPassword")}</p>
                        <p>{t("SignUpFormPasswordDescription")}</p>
                        <input className="input" type="password" />
                    </label>
                    <Link className="link" to="/home">
                    <Button styleName="primary-button" text={t("SignUpFormSignUpButton")}></Button>
                    </Link>
                    <Link className="link" to="/">
                        <Button styleName="secondary-button" text={t("SignUpFormCancelButton")}></Button>
                    </Link>

                </div>
            </div>
            <div className="signup-image-container"></div>
        </form>
    )
}
