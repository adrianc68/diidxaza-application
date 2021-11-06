import React from 'react'
import './addcomment.scss'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'


export default function AddComment() {
    const { t } = useTranslation();
    return (
        <div className="addcomment-main-container">
            <div className="addcomment-input-container">
                <textarea className="input" type="text>"></textarea>
            </div>
            <div className="addcommen-button-control">
                <div className="addcomment-count-characters">
                    <span>150</span>
                    <span> caracteres</span>
                </div>
                <div>
                    <Button styleName="primary-button">{t("ButtonCancel")}</Button>
                </div>
                <div>
                    <Button styleName="primary-button">{t("ButtonSend")}</Button>
                </div>
            </div>
        </div>
    )
}
