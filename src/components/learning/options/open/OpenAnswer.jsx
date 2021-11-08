import React from 'react'
import './openanswer.scss'
import { useTranslation } from "react-i18next";

export default function OpenAnswer() {
    const { t } = useTranslation();

    return (
        <form className="openanswer-form">
            <div className="openanswer-input">
            <span>{t("AnswerSectionInputAnswer")}</span>
                <input type="text" />
            </div>
        </form>
    )
}
