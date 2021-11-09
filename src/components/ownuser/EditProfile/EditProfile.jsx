import React from 'react'
import './editprofile.scss'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'
import ImageAlt from '../../../assets/images/ide-29.svg'

export default function EditProfile() {
    const { t } = useTranslation();
    return (
        <form className="editprofile-main-container">
            <div className="editprofile-content">
                <div className="editprofile-description-container">
                    <h1>Editar perfil</h1>
                    <span> Para editar el perfil debes llenar los campos correspondientes. te recomendamos no utilizar carácteres extraños.</span>

                </div>
                <div className="editprofile-personal-information-container">
                    <h2>{t("SignUpPersonalInformation")}</h2>
                    <div className="editprofile-personal-information-inputs">
                        <label>
                            <div className="editprofile-photo-input-container">
                                <div className="editprofile-photo-left-side">
                                    <img className="editprofile-user-photo" src={ImageAlt} alt=""></img>
                                    <label className="input-file-label">
                                        <input className="input-file" type="file" name="file" accept="image/png, image/jpeg, image/jpg" />
                                        {t("SignUpFormInputFile")}
                                    </label>
                                </div>
                                <div className="editprofile-photo-input-description">
                                    <p className="p-semibold">{t("SignUpFormPhotoInput")}</p>
                                    <p>{t("SignUpFormPhotoDescription")}</p>
                                </div>
                            </div>
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormNameLabelInput")}</p>
                            <input name="name" type="text" />
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormLastnameInput")}</p>
                            <input name="lastname" type="text" />
                        </label>
                        <label>
                            <p className="p-semibold">{t("SignUpFormBirthdateInput")}</p>
                            <p>{t("SignUpFormBirthDateDescription")}</p>
                            <input name="dateBirth" type="date" />
                        </label>


                    </div>
                    <h2>{t("SignUpAccountInformation")}</h2>
                    <div className="editprofile-account-information-inputs">

                        <label>
                            <p className="p-semibold">{t("SignUpFormPassword")}</p>
                            <p>{t("SignUpFormPasswordDescription")}</p>
                            <input name="password" type="password" />
                        </label>

                        <div className="editprofile-button-panel">
                            <div>
                                <Button styleName="secondary-button" text={t("ButtonCancel")}></Button>
                            </div>
                            <div>
                                <Button type="submit" styleName="primary-button" text={t("ButtonEditProfile")}></Button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}
