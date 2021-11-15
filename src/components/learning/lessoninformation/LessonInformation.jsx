import React from 'react'
import './lessoninformation.scss'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom'


export default function LessonInformation() {
    const { t } = useTranslation();

    return (
        <div className="lesson-main-container">
            <div className="lesson-indicator-container">
                <div className="lesson-indicator"></div>
            </div>
            <div className="lesson-information-content">
                <div>
                    <span>{t("LearningLessonStatus")}</span>
                    <span>Disponible</span>
                </div>
                <div>
                    <span>{t("LearningLessonPointsWon")}</span>
                    <span>3000</span>
                </div>
                <div>
                    <span>{t("LearningLessonPointsToWin")}</span>
                    <span>5000</span>
                </div>
            </div>
            <div className="lesson-description-content">
                <span>
                    {t("LearningLessonStartDescription")}
                </span>
            </div>
            <div className="lesson-button-panel">
                <div>
                    <Button styleName="primary-button" text={t("ButtonCancel")} />
                </div>
                <div>
                    <NavLink className="link" to="/lesson">
                        <Button styleName="primary-button" text={t("ButtonStartLesson")} />
                    </NavLink>
                </div>


            </div>
        </div>
    )
}
