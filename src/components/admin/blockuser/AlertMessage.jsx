import React from 'react'
import './AlertMessage.scss'
import Button from '../../Button/Button';
import { useTranslation } from "react-i18next";

export default function AlertMessage({content, handleModal}) {
    const { t } = useTranslation();
    return (
        <div className="alert-main-container">
            <div className="alert-content-container">
                <div className="alert-text">
                    <p>{content}</p>
                </div>
                <div className="alert-button-panel">
                    <Button styleName="dark-blue-button" text={t("ButtonAccept")} onClick= {handleModal}></Button>
                </div>
            </div>
        </div>
    )
}
