import React from 'react'
import './blockuser.scss'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import ImageInformationAlt from '../../../assets/images/ide-37.svg'

export default function BlockUser() {
    const { t } = useTranslation();

    return (
        <div className="blockuser-main-container">
            <div className="blockuser-content-container">
                <div className="blockuser-text">
                    <img src={ImageInformationAlt} alt="Texto alternativo TTT"></img>
                    <h1>{t("BlockUserDescriptionTitle")}</h1>
                    <p>{t("BlockUserDescription")}</p>
                </div>
                <div className="blockuser-button-panel">
                    <Button styleName="primary-button" text={t("ButtonCancel")} ></Button>
                    <Button styleName="primary-button" text={t("ButtonDeleteAccount")} ></Button>
                </div>
            </div>
        </div>
    )
}