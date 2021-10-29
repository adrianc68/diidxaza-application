import React from 'react'
import './deleteaccount.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'

export default function DeleteAccount() {
    const { t } = useTranslation();

    return (
        <div className="deleteaccount-main-container">
            <div className="deleteaccount-message-container">
                <div className="deletaccount-text">
                    <h1>{t("DeleteAccountTitle")}</h1>
                    <img src={ImageInformationAlt} alt="Texto alternativo TTT"></img>
                    <p>{t("DeleteAccountDescription")}</p>
                </div>
                <div className="deleteaccount-button-panel">
                    <div>
                        <Link className="link" to="/home">
                            <Button styleName="primary-button" text={t("ButtonCancel")} ></Button>
                        </Link>
                    </div>
                    <div>
                        <Button styleName="primary-button" text={t("ButtonDeleteAccount")} ></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
