import React from 'react'
import './lesson.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";


export default function Lesson() {
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
                <Button styleName="primary-button" text={t("ButtonCancel")} />
                <Button styleName="primary-button" text={t("ButtonStartLesson")} />

            </div>
        </div>
    )
}
