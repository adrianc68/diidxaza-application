import React from 'react'
import './lessonresults.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";

export default function LessonResults() {
    const { t } = useTranslation();

    return (
        <div className="lesson-main-container">
            <div className="lesson-indicator-container">
                <div className="lesson-indicator"></div>
            </div>
            <div className="lesson-information-content">
                <div>
                    <span>{t("LearningLessonStatus")}</span>
                    <span>Completado</span>
                </div>
                <div>
                    <span>{t("LearningLessonPointsWon")}</span>
                    <span>3000</span>
                </div>
            </div>
            <div className="lesson-description-content">
                <span>
                    {t("LearningLessonResultsDescription")}
                </span>
            </div>
            <div className="lesson-button-panel">
                <Button styleName="primary-button" text={t("ButtonClose")} />
                <Button styleName="primary-button" text={t("ButtonShowResults")} />

            </div>
        </div>
    )
}
