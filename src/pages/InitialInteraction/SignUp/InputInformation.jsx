import React from 'react'
import './InputInformation.scss'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import UserImageDefault from '../../../assets/images/ide-29.svg'

export default function InputInformation() {
    const { t } = useTranslation();


    return (
        <form className="signup-input-personal-information-form">
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
                                <img className="signup-user-photo" src={UserImageDefault}></img>
                                <label className="input-file-label">
                                    <input className="input-file" type="file" accept="image/png, image/jpeg" />
                                    {t("SignUpFormInputFile")}
                                </label>

                            </div>
                            <div className="signup-photo-input-description">
                                <p className="p-semibold">{t("SignUpFormPhotoInput")}</p>
                                <p>{t("SignUpFormPhotoDescription")}</p>
                            </div>
                        </div>
                    </label>
                    <label>
                        <p className="p-semibold">{t("SignUpFormNameLabelInput")}</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p className="p-semibold">{t("SignUpFormLastnameInput")}</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p className="p-semibold">{t("SignUpFormBirthdateInput")}</p>
                        <p>{t("SignUpFormBirthDateDescription")}</p>
                        <input type="date" />
                    </label>

                </div>
                <h2>{t("SignUpAccountInformation")}</h2>
                <div className="signup-account-information-inputs">
                    <label>
                        <p className="p-semibold">{t("SignUpFormUsernameInput")}</p>
                        <p>{t("SignUpFormUsernameDescription")}</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p className="p-semibold">{t("SignUpFormEmailInput")}</p>
                        <p>{t("SignUpFormEmailDescription")}</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p className="p-semibold">{t("SignUpFormPassword")}</p>
                        <p>{t("SignUpFormPasswordDescription")}</p>
                        <input type="password" />
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
            </div>
            
        </form>
    )
}
